import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBuildingCottage = ({
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
    <Path d="M3 21h18M4 21V10l2.5-4.5L12 3l5.5 2.5L20 10v11" />
    <Path d="M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0M9 21v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5" />
  </Svg>
);
export default SvgBuildingCottage;
