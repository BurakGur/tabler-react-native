import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCactusOff = ({
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
    <Path d="M6 9v1a3 3 0 0 0 3 3h1M18 8v5a3 3 0 0 1-.129.872m-2.014 2a3 3 0 0 1-.857.124h-1M10 21V10m0-4V5a2 2 0 1 1 4 0v5m0 4v7M7 21h10M3 3l18 18" />
  </Svg>
);
export default SvgCactusOff;
