import { combineReducers } from "redux";
import { dropZoneReducer } from "./dropZoneReducer";
import { uploadProgressReducer } from "./uploadProgressReducer";

const rootReducer = combineReducers({
  dropZone: dropZoneReducer,
  uploadProgress: uploadProgressReducer,
});

export type rootState = ReturnType<typeof rootReducer>;

export default rootReducer;
