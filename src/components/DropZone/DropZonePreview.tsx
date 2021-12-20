import { css } from "@emotion/css";
import { connect } from "react-redux";
import { rootState } from "../../redux/reducers/rootReducer";

interface ConnectedProps {
  imageSrc: string;
  isUploading: boolean;
}

const DropZonePreview = ({ imageSrc, isUploading }: ConnectedProps) => {
  return (
    <>
      <img
        id="file-ip-1-preview"
        alt="preview"
        src={imageSrc}
        className={css({
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: `blur(${isUploading ? 5 : 0}px)`,
        })}
      />
    </>
  );
};

const mapStateToProps = (state: rootState) => {
  return {
    isUploading: state.uploadProgress.isUploading,
    imageSrc: state.dropZone.imageSrc,
  };
};

export default connect(mapStateToProps)(DropZonePreview);
