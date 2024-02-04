import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChartDots = ({
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
    <Path d="M7 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 7a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10.16 10.62l2.34 2.88M15.088 13.328l2.837-4.586" />
  </Svg>
);
export default SvgChartDots;
