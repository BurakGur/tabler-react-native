import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGitMerge = ({
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
    <Path d="M5 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 8v8" />
    <Path d="M7 8a4 4 0 0 0 4 4h4" />
  </Svg>
);
export default SvgGitMerge;
