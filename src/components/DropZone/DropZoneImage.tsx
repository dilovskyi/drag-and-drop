import { css } from "@emotion/css";

const DropZoneImage = () => {
  return (
    <>
      <img
        src="/upload-icon.png"
        alt="Upload"
        width="100"
        height="78.75"
        className={css({ marginTop: "116px" })}
      />
    </>
  );
};

export default DropZoneImage;
