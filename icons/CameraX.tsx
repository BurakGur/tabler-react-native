import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCameraX = ({
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
    <Path d="M13.5 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v4" />
    <Path d="M9 13a3 3 0 1 0 6 0 3 3 0 0 0-6 0M22 22l-5-5M17 22l5-5" />
  </Svg>
);
export default SvgCameraX;
