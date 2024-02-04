import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChartAreaLine = ({
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
    className="icon icon-tabler icon-tabler-chart-area-line"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m4 19 4-6 4 2 4-5 4 4v5zM4 12l3-4 4 2 5-6 4 4" />
  </Svg>
);
export default SvgChartAreaLine;
