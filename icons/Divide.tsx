import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDivide = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-divide"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Circle cx={12} cy={6} r={1} fill="currentColor" />
    <Circle cx={12} cy={18} r={1} fill="currentColor" />
    <Path d="M5 12h14" />
  </Svg>
);
export default SvgDivide;
