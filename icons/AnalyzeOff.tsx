import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAnalyzeOff = ({
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
    <Path d="M20 11a8.1 8.1 0 0 0-6.986-6.918 8.1 8.1 0 0 0-4.31.62M6.321 6.31A8 8 0 0 0 4.995 8M4 13a8.1 8.1 0 0 0 13.687 4.676M20 16a1 1 0 0 0-1-1" />
    <Path d="M4 8a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9.888 9.87a3 3 0 1 0 4.233 4.252m.595-3.397A3 3 0 0 0 13.29 9.29M3 3l18 18" />
  </Svg>
);
export default SvgAnalyzeOff;
