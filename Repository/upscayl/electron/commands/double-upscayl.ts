import { parse } from "path";
import { getMainWindow } from "../main-window";
import {
  childProcesses,
  savedCustomModelsPath,
  setStopped,
  stopped,
} from "../utils/config-variables";
import slash from "../utils/slash";
import { spawnUpscayl } from "../utils/spawn-upscayl";
import {
  getDoubleUpscaleArguments,
  getDoubleUpscaleSecondPassArguments,
} from "../utils/get-arguments";
import { modelsPath } from "../utils/get-resource-paths";
import logit from "../utils/logit";
import { ELECTRON_COMMANDS } from "../../common/electron-commands";
import { DoubleUpscaylPayload } from "../../common/types/types";
import { ImageFormat } from "../types/types";
import showNotification from "../utils/show-notification";
import getFilenameFromPath from "../../common/get-file-name";
import decodePath from "../../common/decode-path";
import getDirectoryFromPath from "../../common/get-directory-from-path";
import { MODELS } from "../../common/models-list";

const doubleUpscayl = async (event, payload: DoubleUpscaylPayload) => {
  const mainWindow = getMainWindow();
  if (!mainWindow) return;

  const tileSize = payload.tileSize;
  const compression = payload.compression;
  const ttaMode = payload.ttaMode;
  const scale = payload.scale;
  const useCustomWidth = payload.useCustomWidth;
  const customWidth = useCustomWidth ? payload.customWidth : "";
  const model = payload.model;
  const gpuId = payload.gpuId as string;
  const saveImageAs = payload.saveImageAs as ImageFormat;
  const imagePath = decodePath(payload.imagePath);
  let inputDir = getDirectoryFromPath(imagePath);
  let outputDir = decodePath(payload.outputPath);
  const fullfileName = getFilenameFromPath(imagePath);
  const fileName = parse(fullfileName).name;

  const isDefaultModel = model in MODELS;

  // COPY IMAGE TO TMP FOLDER

  const outFile =
    outputDir +
    slash +
    fileName +
    "_upscayl_" +
    (useCustomWidth ? `${customWidth}px_` : `${scale}x_`) +
    model +
    "." +
    saveImageAs;

  // UPSCALE
  let upscayl = spawnUpscayl(
    getDoubleUpscaleArguments({
      inputDir,
      fullfileName: decodeURIComponent(fullfileName),
      outFile,
      modelsPath: isDefaultModel
        ? modelsPath
        : (savedCustomModelsPath ?? modelsPath),
      model,
      scale,
      customWidth,
      gpuId,
      saveImageAs,
      tileSize,
    }),
    logit,
  );

  let upscayl2: ReturnType<typeof spawnUpscayl>;

  childProcesses.push(upscayl);

  setStopped(false);
  let failed = false;
  let failed2 = false;

  // SECOND PASS FUNCTIONS
  const onError2 = (data) => {
    if (!mainWindow) return;
    data.toString();
    // SEND UPSCAYL PROGRESS TO RENDERER
    mainWindow.webContents.send(
      ELECTRON_COMMANDS.DOUBLE_UPSCAYL_PROGRESS,
      data,
    );
    // SET FAILED TO TRUE
    failed2 = true;
    mainWindow &&
      mainWindow.webContents.send(
        ELECTRON_COMMANDS.UPSCAYL_ERROR,
        "Error upscaling image. Error: " + data,
      );
    showNotification("Upscayl Failure", "Failed to upscale image!");
    upscayl2.kill();
    return;
  };

  const onData2 = (data) => {
    if (!mainWindow) return;
    // CONVERT DATA TO STRING
    data = data.toString();
    // SEND UPSCAYL PROGRESS TO RENDERER
    mainWindow.webContents.send(
      ELECTRON_COMMANDS.DOUBLE_UPSCAYL_PROGRESS,
      data,
    );
    // IF PROGRESS HAS ERROR, UPSCAYL FAILED
    if (data.includes("Error") || data.includes("failed")) {
      upscayl2.kill();
      failed2 = true;
      onError2(data);
    } else if (data.includes("Resizing")) {
      mainWindow.webContents.send(ELECTRON_COMMANDS.SCALING_AND_CONVERTING);
    }
  };

  const onClose2 = async (code) => {
    if (!mainWindow) return;
    if (!failed2 && !stopped) {
      logit("💯 Done upscaling");

      mainWindow.setProgressBar(-1);
      mainWindow.webContents.send(
        ELECTRON_COMMANDS.DOUBLE_UPSCAYL_DONE,
        outFile,
      );
      showNotification("Upscayled", "Image upscayled successfully!");
    }
  };

  // FIRST PASS FUNCTIONS
  const onError = (data) => {
    if (!mainWindow) return;
    mainWindow.setProgressBar(-1);
    data.toString();
    // SEND UPSCAYL PROGRESS TO RENDERER
    mainWindow.webContents.send(
      ELECTRON_COMMANDS.DOUBLE_UPSCAYL_PROGRESS,
      data,
    );
    // SET FAILED TO TRUE
    failed = true;
    mainWindow &&
      mainWindow.webContents.send(
        ELECTRON_COMMANDS.UPSCAYL_ERROR,
        "Error upscaling image. Error: " + data,
      );
    showNotification("Upscayl Failure", "Failed to upscale image!");
    upscayl.kill();
    return;
  };

  const onData = (data) => {
    if (!mainWindow) return;
    // CONVERT DATA TO STRING
    data = data.toString();
    // SEND UPSCAYL PROGRESS TO RENDERER
    mainWindow.webContents.send(
      ELECTRON_COMMANDS.DOUBLE_UPSCAYL_PROGRESS,
      data,
    );
    // IF PROGRESS HAS ERROR, UPSCAYL FAILED
    if (data.includes("Error") || data.includes("failed")) {
      upscayl.kill();
      failed = true;
      onError(data);
    } else if (data.includes("Resizing")) {
      mainWindow.webContents.send(ELECTRON_COMMANDS.SCALING_AND_CONVERTING);
    }
  };

  const onClose = (code) => {
    // IF NOT FAILED
    if (!failed && !stopped) {
      // SPAWN A SECOND PASS
      upscayl2 = spawnUpscayl(
        getDoubleUpscaleSecondPassArguments({
          outFile,
          modelsPath: isDefaultModel
            ? modelsPath
            : (savedCustomModelsPath ?? modelsPath),
          model,
          gpuId,
          saveImageAs,
          scale,
          customWidth,
          compression,
          tileSize,
          ttaMode,
        }),
        logit,
      );
      logit("🚀 Upscaling Second Pass");
      childProcesses.push(upscayl2);
      upscayl2.process.stderr.on("data", onData2);
      upscayl2.process.on("error", onError2);
      upscayl2.process.on("close", onClose2);
    }
  };

  upscayl.process.stderr.on("data", onData);
  upscayl.process.on("error", onError);
  upscayl.process.on("close", onClose);
};

export default doubleUpscayl;
