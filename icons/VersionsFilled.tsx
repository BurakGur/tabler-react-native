import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVersionsFilled = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
}: {
  size: number,
  stroke: number,
  color: string,
}) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={stroke}
    className="icon icon-tabler icon-tabler-versions-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="M18 4h-6a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3M7 6a1 1 0 0 1 .993.883L8 7v10a1 1 0 0 1-1.993.117L6 17V7a1 1 0 0 1 1-1M4 7a1 1 0 0 1 .993.883L5 8v8a1 1 0 0 1-1.993.117L3 16V8a1 1 0 0 1 1-1"
    />
  </Svg>
);
export default SvgVersionsFilled;
