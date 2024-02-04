import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHierarchy3 = ({
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
    <Path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M18 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M2 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 17l2-3M9 10l2-3M13 7l2 3M17 14l2 3M15 14l-2 3M9 14l2 3" />
  </Svg>
);
export default SvgHierarchy3;
