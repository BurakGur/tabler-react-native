import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGitBranchDeleted = ({
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
    <Path d="M5 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 8v8M9 18h6a2 2 0 0 0 2-2v-5" />
    <Path d="m14 14 3-3 3 3M15 4l4 4M15 8l4-4" />
  </Svg>
);
export default SvgGitBranchDeleted;
