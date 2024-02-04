import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRadioOff = ({
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
    <Path d="M14 3 9.014 5M6.139 6.15l-1.51.604A1 1 0 0 0 4 7.682v11.323a1 1 0 0 0 1 1h14a1 1 0 0 0 .708-.294M20 16.005v-8a1 1 0 0 0-1-1h-8m-4 0H4.5M4 12h8m4 0h4M7 12v-2M13 16v.01M3 3l18 18" />
  </Svg>
);
export default SvgRadioOff;
