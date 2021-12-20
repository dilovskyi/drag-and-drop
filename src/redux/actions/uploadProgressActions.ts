import {
  SetUploadStatusInterface,
  SetUploadProgressInterface,
  SetSuccessStatusInterface,
  UPLOAD_PROGRESS,
} from "../types/uploadProgress";

export const setUploadStatus = (value: boolean): SetUploadStatusInterface => {
  return {
    type: UPLOAD_PROGRESS.SET_UPLOAD_STATUS,
    payload: {
      isUploading: value,
    },
  };
};

export const setUploadProgress = (
  value: null | number
): SetUploadProgressInterface => {
  return {
    type: UPLOAD_PROGRESS.SET_UPLOAD_PROGRESS,
    payload: {
      progress: value,
    },
  };
};

export const setSuccessStatus = (value: boolean): SetSuccessStatusInterface => {
  return {
    type: UPLOAD_PROGRESS.SET_SUCCES_STATUS,
    payload: {
      isSuccess: value,
    },
  };
};
