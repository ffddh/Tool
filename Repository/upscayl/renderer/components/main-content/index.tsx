"use client";
import useLogger from "../hooks/use-logger";
import { useState, useMemo } from "react";
import { ELECTRON_COMMANDS } from "@common/electron-commands";
import { useAtomValue, useSetAtom } from "jotai";
import {
  batchModeAtom,
  lensSizeAtom,
  savedOutputPathAtom,
  progressAtom,
  viewTypeAtom,
  rememberOutputFolderAtom,
} from "../../atoms/user-settings-atom";
import { useToast } from "@/components/ui/use-toast";
import { sanitizePath } from "@common/sanitize-path";
import getDirectoryFromPath from "@common/get-directory-from-path";
import { FEATURE_FLAGS } from "@common/feature-flags";
import { ImageFormat, VALID_IMAGE_FORMATS } from "@/lib/valid-formats";
import ProgressBar from "./progress-bar";
import InstructionsCard from "./instructions-card";
import ImageViewSettings from "./image-view-settings";
import useUpscaylVersion from "../hooks/use-upscayl-version";
import MacTitlebarDragRegion from "./mac-titlebar-drag-region";
import LensViewer from "./lens-view";
import ImageViewer from "./image-viewer";
import useTranslation from "../hooks/use-translation";
import SliderView from "./slider-view";

type MainContentProps = {
  imagePath: string;
  resetImagePaths: () => void;
  upscaledBatchFolderPath: string;
  setImagePath: React.Dispatch<React.SetStateAction<string>>;
  validateImagePath: (path: string) => void;
  selectFolderHandler: () => void;
  selectImageHandler: () => void;
  upscaledImagePath: string;
  batchFolderPath: string;
  doubleUpscaylCounter: number;
  setDimensions: React.Dispatch<
    React.SetStateAction<{
      width: number;
      height: number;
    }>
  >;
};

const MainContent = ({
  imagePath,
  resetImagePaths,
  upscaledBatchFolderPath,
  setImagePath,
  validateImagePath,
  selectFolderHandler,
  selectImageHandler,
  upscaledImagePath,
  batchFolderPath,
  doubleUpscaylCounter,
  setDimensions,
}: MainContentProps) => {
  const t = useTranslation();
  const logit = useLogger();
  const { toast } = useToast();
  const version = useUpscaylVersion();

  const setOutputPath = useSetAtom(savedOutputPathAtom);
  const progress = useAtomValue(progressAtom);
  const batchMode = useAtomValue(batchModeAtom);

  const viewType = useAtomValue(viewTypeAtom);
  const lensSize = useAtomValue(lensSizeAtom);
  const rememberOutputFolder = useAtomValue(rememberOutputFolderAtom);
  const [zoomAmount, setZoomAmount] = useState("100");

  const sanitizedUpscaledImagePath = useMemo(
    () => sanitizePath(upscaledImagePath),
    [upscaledImagePath],
  );

  const showInformationCard = useMemo(() => {
    if (!batchMode) {
      return imagePath.length === 0 && upscaledImagePath.length === 0;
    } else {
      return (
        batchFolderPath.length === 0 && upscaledBatchFolderPath.length === 0
      );
    }
  }, [
    batchMode,
    imagePath,
    upscaledImagePath,
    batchFolderPath,
    upscaledBatchFolderPath,
  ]);

  // DRAG AND DROP HANDLERS
  const handleDragEnter = (e) => {
    e.preventDefault();
    console.log("drag enter");
  };
  const handleDragLeave = (e) => {
    e.preventDefault();
    console.log("drag leave");
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    console.log("drag over");
  };

  const openFolderHandler = (e) => {
    const logit = useLogger();
    logit("📂 OPEN_FOLDER: ", upscaledBatchFolderPath);
    window.electron.send(
      ELECTRON_COMMANDS.OPEN_FOLDER,
      upscaledBatchFolderPath,
    );
  };

  const sanitizedImagePath = useMemo(
    () => sanitizePath(imagePath),
    [imagePath],
  );

  const handleDrop = (e) => {
    e.preventDefault();
    resetImagePaths();
    if (
      e.dataTransfer.items.length === 0 ||
      e.dataTransfer.files.length === 0
    ) {
      logit("👎 No valid files dropped");
      toast({
        title: t("ERRORS.INVALID_IMAGE_ERROR.TITLE"),
        description: t("ERRORS.INVALID_IMAGE_ERROR.ADDITIONAL_DESCRIPTION"),
      });
      return;
    }
    const type = e.dataTransfer.items[0].type;
    const filePath = e.dataTransfer.files[0].path;
    const extension = e.dataTransfer.files[0].name.split(".").at(-1);
    logit("⤵️ Dropped file: ", JSON.stringify({ type, filePath, extension }));
    if (
      !type.includes("image") ||
      !VALID_IMAGE_FORMATS.includes(extension.toLowerCase())
    ) {
      logit("🚫 Invalid file dropped");
      toast({
        title: t("ERRORS.INVALID_IMAGE_ERROR.TITLE"),
        description: t("ERRORS.INVALID_IMAGE_ERROR.ADDITIONAL_DESCRIPTION"),
      });
    } else {
      logit("🖼 Setting image path: ", filePath);
      setImagePath(filePath);
      const dirname = getDirectoryFromPath(filePath);
      logit("🗂 Setting output path: ", dirname);
      if (!FEATURE_FLAGS.APP_STORE_BUILD) {
        if (!rememberOutputFolder) {
          setOutputPath(dirname);
        }
      }
      validateImagePath(filePath);
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLDivElement>) => {
    console.log("📋 Pasted: ", e);
    resetImagePaths();
    e.preventDefault();
    const items = e.clipboardData.items;
    const files = e.clipboardData.files;
    console.log("🚀 => files:", files);

    if (items.length === 0 || files.length === 0) {
      toast({
        title: t("ERRORS.INVALID_IMAGE_ERROR.TITLE"),
        description: t("ERRORS.INVALID_IMAGE_ERROR.ADDITIONAL_DESCRIPTION"),
      });
      return;
    }
    const type = items[0].type;
    const filePath = files[0].path;
    const extension = files[0].name
      .split(".")
      .at(-1)
      .toLowerCase() as ImageFormat;
    logit("📋 Pasted file: ", JSON.stringify({ type, filePath, extension }));
    if (!type.includes("image") && !VALID_IMAGE_FORMATS.includes(extension)) {
      toast({
        title: t("ERRORS.INVALID_IMAGE_ERROR.TITLE"),
        description: t("ERRORS.INVALID_IMAGE_ERROR.ADDITIONAL_DESCRIPTION"),
      });
    } else {
      setImagePath(filePath);
      const dirname = getDirectoryFromPath(filePath);
      logit("🗂 Setting output path: ", dirname);
      if (!FEATURE_FLAGS.APP_STORE_BUILD) {
        if (!rememberOutputFolder) {
          setOutputPath(dirname);
        }
      }
      validateImagePath(filePath);
    }
  };

  return (
    <div
      className="relative flex h-screen w-full flex-col items-center justify-center"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDoubleClick={batchMode ? selectFolderHandler : selectImageHandler}
      onPaste={handlePaste}
    >
      <MacTitlebarDragRegion />

      {progress.length > 0 &&
        upscaledImagePath.length === 0 &&
        upscaledBatchFolderPath.length === 0 && (
          <ProgressBar
            batchMode={batchMode}
            progress={progress}
            doubleUpscaylCounter={doubleUpscaylCounter}
            resetImagePaths={resetImagePaths}
          />
        )}

      {/* DEFAULT PANE INFO */}
      {showInformationCard && (
        <InstructionsCard version={version} batchMode={batchMode} />
      )}

      <ImageViewSettings
        zoomAmount={zoomAmount}
        setZoomAmount={setZoomAmount}
        resetImagePaths={resetImagePaths}
      />

      {/* SHOW SELECTED IMAGE */}
      {!batchMode && upscaledImagePath.length === 0 && imagePath.length > 0 && (
        <ImageViewer imagePath={imagePath} setDimensions={setDimensions} />
      )}

      {/* BATCH UPSCALE SHOW SELECTED FOLDER */}
      {batchMode &&
        upscaledBatchFolderPath.length === 0 &&
        batchFolderPath.length > 0 && (
          <p className="select-none text-base-content">
            <span className="font-bold">
              {t("APP.PROGRESS.BATCH.SELECTED_FOLDER_TITLE")}
            </span>{" "}
            {batchFolderPath}
          </p>
        )}
      {/* BATCH UPSCALE DONE INFO */}

      {batchMode && upscaledBatchFolderPath.length > 0 && (
        <div className="z-50 flex flex-col items-center">
          <p className="select-none py-4 font-bold text-base-content">
            {t("APP.PROGRESS.BATCH.DONE_TITLE")}
          </p>
          <button
            className="bg-gradient-blue btn btn-primary rounded-btn p-3 font-medium text-white/90 transition-colors"
            onClick={openFolderHandler}
          >
            {t("APP.PROGRESS.BATCH.OPEN_UPSCAYLED_FOLDER_TITLE")}
          </button>
        </div>
      )}

      {!batchMode && viewType === "lens" && upscaledImagePath && imagePath && (
        <LensViewer
          zoomAmount={zoomAmount}
          lensSize={lensSize}
          sanitizedImagePath={sanitizedImagePath}
          sanitizedUpscaledImagePath={sanitizedUpscaledImagePath}
        />
      )}

      {/* COMPARISON SLIDER */}
      {!batchMode &&
        viewType === "slider" &&
        imagePath.length > 0 &&
        upscaledImagePath.length > 0 && (
          <SliderView
            sanitizedImagePath={sanitizedImagePath}
            sanitizedUpscaledImagePath={sanitizedUpscaledImagePath}
            zoomAmount={zoomAmount}
          />
        )}
    </div>
  );
};

export default MainContent;
