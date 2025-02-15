import { translationAtom } from "@/atoms/translations-atom";
import { lensSizeAtom, viewTypeAtom } from "@/atoms/user-settings-atom";
import { cn } from "@/lib/utils";
import { useAtom, useAtomValue } from "jotai";
import { WrenchIcon } from "lucide-react";
import { useEffect, useState } from "react";

const ImageViewSettings = ({
  zoomAmount,
  setZoomAmount,
  resetImagePaths,
}: {
  zoomAmount: string;
  setZoomAmount: (arg: any) => void;
  resetImagePaths: () => void;
}) => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [viewType, setViewType] = useAtom(viewTypeAtom);
  const [lensSize, setLensSize] = useAtom(lensSizeAtom);
  const t = useAtomValue(translationAtom);

  useEffect(() => {
    if (!localStorage.getItem("zoomAmount")) {
      localStorage.setItem("zoomAmount", zoomAmount);
    } else {
      setZoomAmount(localStorage.getItem("zoomAmount"));
    }
  }, []);

  return (
    <div
      onDoubleClick={(e) => {
        e.stopPropagation();
      }}
      className={`fixed right-0 top-0 z-50 h-screen w-[28rem] bg-base-100 text-base-content shadow-xl shadow-base-300 transition-all duration-500 ${
        openSidebar ? "right-0" : "-right-full translate-x-full"
      }`}
    >
      <div
        className={`group absolute right-[100%] top-1/2 z-50 flex cursor-pointer items-center gap-2 rounded-btn rounded-r-none bg-base-100 p-4 transition-all duration-500`}
        onClick={() => {
          setOpenSidebar(!openSidebar);
        }}
      >
        <WrenchIcon
          className={cn(
            "animate text-xl text-base-content",
            openSidebar ? "rotate-180" : "rotate-0",
          )}
        />
      </div>

      <div className="flex flex-col justify-center gap-5 overflow-auto p-5">
        <button className="btn btn-primary" onClick={resetImagePaths}>
          {t("APP.IMAGE_OPTIONS.RESET_BUTTON_TITLE")}
        </button>

        <div className="flex flex-row items-center gap-2">
          <p className="text-sm font-medium">
            {t("APP.IMAGE_OPTIONS.LENS_VIEW_TITLE")}
          </p>
          <input
            type="checkbox"
            className="toggle"
            checked={viewType === "slider"}
            onChange={(e) => {
              setViewType(e.target.checked ? "slider" : "lens");
            }}
          />
          <p className="text-sm font-medium">
            {t("APP.IMAGE_OPTIONS.SLIDER_VIEW_TITLE")}
          </p>
        </div>

        {viewType !== "lens" && (
          <>
            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">
                {t("APP.IMAGE_OPTIONS.ZOOM_AMOUNT_TITLE")} ({zoomAmount}%)
              </p>
              <input
                type="range"
                min="100"
                max="1000"
                step={10}
                className="range range-md"
                value={parseInt(zoomAmount)}
                onChange={(e) => {
                  setZoomAmount(e.target.value);
                  localStorage.setItem("zoomAmount", e.target.value);
                }}
              />
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-sm font-medium">
                {t("APP.IMAGE_OPTIONS.LENS_SIZE_TITLE")} ({lensSize / 10})
              </p>
              <input
                type="range"
                min="20"
                max="400"
                step={10}
                className="range range-md"
                value={lensSize}
                onChange={(e) => {
                  setLensSize(parseInt(e.target.value));
                }}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageViewSettings;
