import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCarTurbine = ({
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
    className="icon icon-tabler icon-tabler-car-turbine"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M7 13a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
    <Path d="M18.86 11c.088.66.14 1.512.14 2a8 8 0 1 1-8-8h6" />
    <Path d="M11 9q3.733.162 6 0M17 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1zM11 13l-3.5-1.5M11 13l2.5 3M8.5 16l2.5-3M11 13l3.5-1.5M11 9v4" />
  </Svg>
);
export default SvgCarTurbine;
