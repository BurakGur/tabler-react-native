import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAntennaBars4 = ({
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
    className="icon icon-tabler icon-tabler-antenna-bars-4"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M6 18v-3M10 18v-6M14 18V9M18 18v.01" />
  </Svg>
);
export default SvgAntennaBars4;
