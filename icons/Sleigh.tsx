import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSleigh = ({
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
    className="icon icon-tabler icon-tabler-sleigh"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 19h15a4 4 0 0 0 4-4M16 15H7a4 4 0 0 1-4-4V5l1.243 1.243A6 6 0 0 0 8.485 8H12v2a2 2 0 0 0 2 2h.5a1.5 1.5 0 0 0 1.5-1.5 1.5 1.5 0 0 1 3 0V12a3 3 0 0 1-3 3M15 15v4M7 15v4" />
  </Svg>
);
export default SvgSleigh;
