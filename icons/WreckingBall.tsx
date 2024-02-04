import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWreckingBall = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
  ...props
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
    className=""
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M17 13a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M11 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M13 19H4M4 15h9" />
    <Path d="M8 12V7h2a3 3 0 0 1 3 3v5" />
    <Path d="M5 15v-2a1 1 0 0 1 1-1h7M19 11V4l-6 7" />
  </Svg>
);
export default SvgWreckingBall;
