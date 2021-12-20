import { css } from "@emotion/css";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import { rootState } from "../../redux/reducers/rootReducer";
interface ConnectedProps {
  isSuccess: boolean;
  isUploading: boolean;
}

const StatusInfoSubtitle = ({ isSuccess, isUploading }: ConnectedProps) => {
  const [subtitleText, setSubtitleText] = useState(
    "Upload your image file, up to 5mb in size"
  );

  useEffect(() => {
    if (isUploading) {
      setSubtitleText("Don't close this window while the image uploading");
    } else if (isSuccess) {
      setSubtitleText("Image uploaded successfully");
    }
  }, [isSuccess, isUploading]);

  return (
    <>
      <div
        className={css({
          fontSize: "12px",
          textAlign: "center",
          color: "#A3A3A3",
        })}>
        <div>{subtitleText}</div>
      </div>
    </>
  );
};

const mapStateToProps = (state: rootState) => {
  return state.uploadProgress;
};

export default connect(mapStateToProps)(StatusInfoSubtitle);
