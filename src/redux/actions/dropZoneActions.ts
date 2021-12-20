import {
  SetImageSrcInterface,
  SetPreviewVisibilityInterface,
  DROP_ZONE,
} from "../types/dropZone";

export const setImageSrc = (value: string): SetImageSrcInterface => {
  return {
    type: DROP_ZONE.SET_IMAGE_SRC,
    payload: {
      imageSrc: value,
    },
  };
};

export const setPreviewVisibilityStatus = (
  value: boolean
): SetPreviewVisibilityInterface => {
  return {
    type: DROP_ZONE.SET_PREVIEW_VISIBILITY_STATUS,
    payload: {
      previewVisibilityStatus: value,
    },
  };
};

export const uploadImage = () => {};
