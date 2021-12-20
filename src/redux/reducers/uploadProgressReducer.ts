import {
  UploadProgressStateInterface,
  UPLOAD_PROGRESS_ACTIONS_TYPE,
  UPLOAD_PROGRESS,
} from "../types/uploadProgress";

const initialState: UploadProgressStateInterface = {
  isUploading: false,
  isSuccess: false,
  progress: null,
};

export const uploadProgressReducer = (
  state = initialState,
  action: UPLOAD_PROGRESS_ACTIONS_TYPE
): UploadProgressStateInterface => {
  switch (action.type) {
    case UPLOAD_PROGRESS.SET_UPLOAD_STATUS:
      return {
        ...state,
        ...action.payload,
      };
    case UPLOAD_PROGRESS.SET_UPLOAD_PROGRESS:
      return {
        ...state,
        ...action.payload,
      };
    case UPLOAD_PROGRESS.SET_SUCCES_STATUS:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
