import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandCSharp = ({
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
    <Path d="M10 9a3 3 0 0 0-3-3h-.5A3.5 3.5 0 0 0 3 9.5v5A3.5 3.5 0 0 0 6.5 18H7a3 3 0 0 0 3-3M16 7l-1 10M20 7l-1 10M14 10h7.5M21 14h-7.5" />
  </Svg>
);
export default SvgBrandCSharp;
