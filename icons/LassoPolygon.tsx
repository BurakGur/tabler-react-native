import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLassoPolygon = ({
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
    className="icon icon-tabler icon-tabler-lasso-polygon"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4.028 13.252 3 10l2-7 7 5 8-3 1 9-9 3-5.144-1.255" />
    <Path d="M3 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <Path d="M5 17c0 1.42.316 2.805 1 4" />
  </Svg>
);
export default SvgLassoPolygon;
