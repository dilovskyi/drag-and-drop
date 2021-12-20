import { css } from "@emotion/css";

import StatusTitle from "../StatusTitle/StatusTitle";
import DropZone from "../DropZone/DropZone";
import StatusInfoSubtitle from "../StatusInfoSubtitle/StatusInfoSubtitle";

const App = () => {
  return (
    <>
      <div
        className={css({
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        })}>
        <StatusTitle />
        <DropZone />
        <StatusInfoSubtitle />
      </div>
    </>
  );
};

export default App;
