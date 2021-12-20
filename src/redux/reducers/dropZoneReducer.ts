import {
  DropZoneStateInterface,
  DROP_ZONE_ACTIONS_TYPE,
  DROP_ZONE,
} from "../types/dropZone";

const initialState: DropZoneStateInterface = {
  imageSrc: "",
  previewVisibilityStatus: false,
};

export const dropZoneReducer = (
  state = initialState,
  action: DROP_ZONE_ACTIONS_TYPE
): DropZoneStateInterface => {
  switch (action.type) {
    case DROP_ZONE.SET_IMAGE_SRC:
      return {
        ...state,
        ...action.payload,
      };
    case DROP_ZONE.SET_PREVIEW_VISIBILITY_STATUS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
