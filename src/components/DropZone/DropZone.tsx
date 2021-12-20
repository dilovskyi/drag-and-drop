import { createContext } from "react";
import { css } from "@emotion/css";
import { connect } from "react-redux";
import {
  setImageSrc,
  setPreviewVisibilityStatus,
} from "../../redux/actions/dropZoneActions";
import {
  setUploadStatus,
  setUploadProgress,
  setSuccessStatus,
} from "../../redux/actions/uploadProgressActions";

import DropZoneImage from "./DropZoneImage";
import DropZoneDescription from "./DropZoneDescription";
import DropZonePreview from "./DropZonePreview";
import UploadingProgress from "../UploadingProgress/UploadingProgress";

import uploadImage from "../../api/uploadImage";

import { rootState } from "../../redux/reducers/rootReducer";

export const SelectImageHandlerContext = createContext<Function>(() => {});

interface ConnectedProps {
  previewVisibilityStatus: boolean;
  isUploading: boolean;
}

interface DispatchProps {
  setImageSrc: typeof setImageSrc;
  setPreviewVisibilityStatus: typeof setPreviewVisibilityStatus;
  setUploadStatus: typeof setUploadStatus;
  setUploadProgress: typeof setUploadProgress;
  setSuccessStatus: typeof setSuccessStatus;
}

type Props = ConnectedProps & DispatchProps;

const DropZone = ({
  setImageSrc,
  previewVisibilityStatus,
  setPreviewVisibilityStatus,
  isUploading,
  setUploadStatus,
  setUploadProgress,
  setSuccessStatus,
}: Props) => {
  const toggleState = (filesArr: FileList | null): void => {
    if (!filesArr) {
      return;
    }

    const maxSize = 5242880;
    const img: File = filesArr[0];

    if (filesArr.length !== 1 || img.size > maxSize) {
      throw new Error("Unable to upload");
    }

    const src = URL.createObjectURL(img);
    setImageSrc(src);
    uploadImage({ img, setUploadStatus, setUploadProgress, setSuccessStatus });
    setPreviewVisibilityStatus(true);
  };

  const selectImageHandler = (e: Event): void => {
    let filesArr = (e.target as HTMLInputElement).files;
    if (filesArr !== null) {
      toggleState(filesArr);
    }
  };

  const imageDropHandler = (e: React.DragEvent<HTMLDivElement>): void => {
    e.preventDefault();
    const filesArr = e.dataTransfer.files;
    toggleState(filesArr);
  };

  return (
    <>
      <div
        onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault();
        }}
        onDrop={(e: React.DragEvent<HTMLDivElement>) => imageDropHandler(e)}
        className={css({
          minWidth: "280px",
          minHeight: "362px",
          margin: "30px 0",
          background: "#FAFAFA",
          border: "1px dashed #4B4B4B",
          borderRadius: "10px",
          boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        })}>
        {isUploading && <UploadingProgress />}

        {previewVisibilityStatus ? (
          <DropZonePreview />
        ) : (
          <>
            <DropZoneImage />
            <SelectImageHandlerContext.Provider value={selectImageHandler}>
              <DropZoneDescription />
            </SelectImageHandlerContext.Provider>
          </>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state: rootState) => {
  return {
    isUploading: state.uploadProgress.isUploading,
    ...state.dropZone,
  };
};

const mapDispatchToProps = {
  setImageSrc,
  setPreviewVisibilityStatus,
  setUploadStatus,
  setUploadProgress,
  setSuccessStatus,
};

export default connect(mapStateToProps, mapDispatchToProps)(DropZone);
