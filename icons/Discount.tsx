import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDiscount = ({
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
    <Path d="m9 15 6-6" />
    <Circle cx={9.5} cy={9.5} r={0.5} fill="currentColor" />
    <Circle cx={14.5} cy={14.5} r={0.5} fill="currentColor" />
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
  </Svg>
);
export default SvgDiscount;
