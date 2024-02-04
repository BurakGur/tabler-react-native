import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEyeglass2 = ({
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
    className="icon icon-tabler icon-tabler-eyeglass-2"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8 4H6L3 14v2.5M16 4h2l3 10v2.5M10 16h4" />
    <Path d="M14 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M3 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0" />
  </Svg>
);
export default SvgEyeglass2;
