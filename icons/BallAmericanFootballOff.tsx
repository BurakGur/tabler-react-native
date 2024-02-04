import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBallAmericanFootballOff = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m15 9-1 1m-2 2-3 3M10 12l2 2M8 21a5 5 0 0 0-5-5" />
    <Path d="M6.813 6.802A12.96 12.96 0 0 0 3 16a5 5 0 0 0 5 5 12.96 12.96 0 0 0 9.186-3.801m1.789-2.227A12.94 12.94 0 0 0 21 8a5 5 0 0 0-5-5 12.94 12.94 0 0 0-6.967 2.022" />
    <Path d="M16 3a5 5 0 0 0 5 5M3 3l18 18" />
  </Svg>
);
export default SvgBallAmericanFootballOff;
