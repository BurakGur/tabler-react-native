import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlayerSkipBackFilled = ({
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
    className="icon icon-tabler icon-tabler-player-skip-back-filled"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      stroke="none"
      d="m19.496 4.136-12 7a1 1 0 0 0 0 1.728l12 7A1 1 0 0 0 21 19V5a1 1 0 0 0-1.504-.864M4 4a1 1 0 0 1 .993.883L5 5v14a1 1 0 0 1-1.993.117L3 19V5a1 1 0 0 1 1-1"
    />
  </Svg>
);
export default SvgPlayerSkipBackFilled;
