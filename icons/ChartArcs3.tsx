import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChartArcs3 = ({
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
    className="icon icon-tabler icon-tabler-chart-arcs-3"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <Path d="M7 12a5 5 0 1 0 5-5" />
    <Path d="M6.29 18.957A9 9 0 1 0 12 3" />
  </Svg>
);
export default SvgChartArcs3;
