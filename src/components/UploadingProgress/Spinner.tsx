import { useState } from "react";
import { css } from "@emotion/css";
import useAnimationFrame from "../../hooks/useAnimationFrame";

const ProgressSpinner = () => {
  const [rotatedDeg, setRotateDeg] = useState(0);

  useAnimationFrame(() => {
    setRotateDeg((prevRotatedDeg: number): number => prevRotatedDeg + 2);
  });

  return (
    <img
      src="./loader.svg"
      alt="loader"
      className={css({
        transform: `rotate(${rotatedDeg}deg)`,
      })}
    />
  );
};

export default ProgressSpinner;
