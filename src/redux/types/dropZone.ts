export enum DROP_ZONE {
  SET_IMAGE_SRC = "SET_IMAGE_SRC",
  SET_PREVIEW_VISIBILITY_STATUS = "SET_PREVIEW_VISIBILITY_STATUS",
}

export interface DropZoneStateInterface {
  imageSrc: string;
  previewVisibilityStatus: boolean;
}

export interface SetImageSrcInterface {
  type: DROP_ZONE.SET_IMAGE_SRC;
  payload: {
    imageSrc: string;
  };
}
export interface SetPreviewVisibilityInterface {
  type: DROP_ZONE.SET_PREVIEW_VISIBILITY_STATUS;
  payload: {
    previewVisibilityStatus: boolean;
  };
}

export type DROP_ZONE_ACTIONS_TYPE =
  | SetImageSrcInterface
  | SetPreviewVisibilityInterface;
