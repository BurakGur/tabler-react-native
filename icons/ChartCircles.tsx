import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChartCircles = ({
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
    className="icon icon-tabler icon-tabler-chart-circles"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 9.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0" />
    <Path d="M9 14.5a5.5 5.5 0 1 0 11 0 5.5 5.5 0 1 0-11 0" />
  </Svg>
);
export default SvgChartCircles;
