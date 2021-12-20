import { css } from "@emotion/css";
import DropZoneSelect from "./DropZoneSelect";

const DropZoneDescription = () => {
  return (
    <div
      className={css({
        marginTop: "20px",
        textAlign: "center",
        color: "#A6A6A6",
        maxWidth: "260px",
      })}>
      Drag & Drop image file to upload or
      <DropZoneSelect />
      it manually
    </div>
  );
};

export default DropZoneDescription;
