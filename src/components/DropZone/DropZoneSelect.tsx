import { css } from "@emotion/css";
import { useContext } from "react";
import { SelectImageHandlerContext } from "./DropZone";

function DropZoneSelect() {
  const selectImageHandler = useContext(SelectImageHandlerContext);
  return (
    <>
      {" "}
      <label
        htmlFor="image-input"
        className={css({
          color: "#000000",
          cursor: "pointer",
          textDecoration: "underline",
        })}>
        select
      </label>{" "}
      <input
        multiple={false}
        type="file"
        accept=".png, .jpg, .jpeg"
        id="image-input"
        name="image-input"
        hidden
        onChange={(e: React.FormEvent<HTMLInputElement>) =>
          selectImageHandler(e)
        }
      />
    </>
  );
}

export default DropZoneSelect;
