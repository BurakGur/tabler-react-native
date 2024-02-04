import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCarSuv = ({
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
    <Path d="M5 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M16 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M5 9l2-4h7.438a2 2 0 0 1 1.94 1.515L17 9h3a2 2 0 0 1 2 2v3M10 9V5M2 7v4" />
    <Path d="M22.001 14.001A5 5 0 0 0 18 12a5 5 0 0 0-4 2h-3a4.998 4.998 0 0 0-8.003.003" />
    <Path d="M5 12V9h13" />
  </Svg>
);
export default SvgCarSuv;
