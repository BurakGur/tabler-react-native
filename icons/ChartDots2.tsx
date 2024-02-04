import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChartDots2 = ({
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
    <Path d="M3 3v18h18" />
    <Path d="M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M11 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M21 3l-6 1.5M14.113 6.65l2.771 3.695M16 12.5l-5 2" />
  </Svg>
);
export default SvgChartDots2;
