import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChartDots3 = ({
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
    <Path d="M3 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 6a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M9 17l5-1.5M6.5 8.5l7.81 5.37M7 7l8-1" />
  </Svg>
);
export default SvgChartDots3;
