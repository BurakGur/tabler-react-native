import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandBlender = ({
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
    <Path d="M9 14a6 5 0 1 0 12 0 6 5 0 1 0-12 0" />
    <Path d="M14 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 16l9-6.5M6 9h9M13 5l5.65 5" />
  </Svg>
);
export default SvgBrandBlender;
