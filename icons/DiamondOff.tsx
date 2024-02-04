import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDiamondOff = ({
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
    className="icon icon-tabler icon-tabler-diamond-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M9 5h9l3 5-3.308 3.697m-1.883 2.104L12.5 19.5a.7.7 0 0 1-1 0L3 10l2.62-4.368" />
    <Path d="M10 12 8 9.8l.6-1M3 3l18 18" />
  </Svg>
);
export default SvgDiamondOff;
