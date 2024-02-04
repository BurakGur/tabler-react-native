import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPick = ({
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
    <Path d="m13 8-9.383 9.418a2.09 2.09 0 0 0 0 2.967 2.11 2.11 0 0 0 2.976 0L16 11" />
    <Path d="M9 3h4.586a1 1 0 0 1 .707.293l6.414 6.414a1 1 0 0 1 .293.707V15a2 2 0 1 1-4 0v-3l-5-5H9a2 2 0 1 1 0-4" />
  </Svg>
);
export default SvgPick;
