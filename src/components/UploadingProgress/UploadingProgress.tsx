import { css } from "@emotion/css";
import Spinner from "./Spinner";

import { connect } from "react-redux";
import { rootState } from "../../redux/reducers/rootReducer";

interface ConnectedProps {
  uploadProgress: number | null;
}

const UploadingProgress = ({ uploadProgress }: ConnectedProps) => {
  return (
    <div
      className={css({
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 5,
      })}>
      <Spinner />
      <div
        className={css({
          textAlign: "center",
          marginTop: "10px",
          color: "#ffff",
          fontSize: "16px",
        })}>
        {uploadProgress}%
      </div>
    </div>
  );
};

const mapStateToProps = (state: rootState) => {
  return {
    uploadProgress: state.uploadProgress.progress,
  };
};

export default connect(mapStateToProps)(UploadingProgress);
