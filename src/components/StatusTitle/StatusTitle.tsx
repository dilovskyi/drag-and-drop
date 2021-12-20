import { css } from "@emotion/css";
import { connect } from "react-redux";
import { rootState } from "../../redux/reducers/rootReducer";
interface ConnectedProps {
  isSuccess: boolean;
}

const StatusTitle = ({ isSuccess }: ConnectedProps) => {
  const titleText = isSuccess ? "Success" : "Upload Image";
  return (
    <div
      className={css({
        display: "flex",
        justifyContent: "space-between",
        minWidth: "125px",
        fontSize: "24px",
        fontWeight: 500,
      })}>
      {isSuccess && <img src="/success-icon.svg" alt="succes" />}
      <div>{titleText}</div>
    </div>
  );
};

const mapStateToProps = (state: rootState) => ({
  isSuccess: state.uploadProgress.isSuccess,
});

export default connect(mapStateToProps)(StatusTitle);
