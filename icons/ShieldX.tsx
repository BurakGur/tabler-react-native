import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShieldX = ({
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
    <Path d="M13.252 20.601q-.613.233-1.252.399A12 12 0 0 1 3.5 6 12 12 0 0 0 12 3a12 12 0 0 0 8.5 3 12 12 0 0 1-.19 7.357M22 22l-5-5M17 22l5-5" />
  </Svg>
);
export default SvgShieldX;
