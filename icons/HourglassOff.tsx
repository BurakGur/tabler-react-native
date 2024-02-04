import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHourglassOff = ({
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
    <Path d="M18 18v2a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2a6 6 0 0 1 6-6M6 6a6 6 0 0 0 6 6m3.13-.88A6 6 0 0 0 18 6V4a1 1 0 0 0-1-1H7M3 3l18 18" />
  </Svg>
);
export default SvgHourglassOff;
