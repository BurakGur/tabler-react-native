import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMathMaxMin = ({
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
    <Path d="M15 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <Path d="M3 14s.605-5.44 2.284-7.862m3.395.026c2.137 2.652 4.547 9.113 6.68 11.719M18.748 18.038Q19.801 16.718 21 10" />
  </Svg>
);
export default SvgMathMaxMin;
