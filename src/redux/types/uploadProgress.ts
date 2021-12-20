export enum UPLOAD_PROGRESS {
  SET_UPLOAD_STATUS = "SET_UPLOAD_STATUS",
  SET_UPLOAD_PROGRESS = "SET_UPLOAD_PROGRESS",
  SET_SUCCES_STATUS = "SET_SUCCES_STATUS",
}

export interface UploadProgressStateInterface {
  isUploading: boolean;
  isSuccess: boolean;
  progress: null | number;
}

export interface SetUploadStatusInterface {
  type: UPLOAD_PROGRESS.SET_UPLOAD_STATUS;
  payload: {
    isUploading: boolean;
  };
}

export interface SetUploadProgressInterface {
  type: UPLOAD_PROGRESS.SET_UPLOAD_PROGRESS;
  payload: {
    progress: null | number;
  };
}
export interface SetSuccessStatusInterface {
  type: UPLOAD_PROGRESS.SET_SUCCES_STATUS;
  payload: {
    isSuccess: boolean;
  };
}
export type UPLOAD_PROGRESS_ACTIONS_TYPE =
  | SetUploadStatusInterface
  | SetUploadProgressInterface
  | SetSuccessStatusInterface;
