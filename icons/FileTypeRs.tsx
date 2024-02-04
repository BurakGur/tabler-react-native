import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileTypeRs = ({
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
    <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <Path d="M14 3v4a1 1 0 0 0 1 1h4M9 20.25c0 .414.336.75.75.75H11a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h1.25a.75.75 0 0 1 .75.75" />
    <Path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-1M3 18h1.5a1.5 1.5 0 0 0 0-3H3v6m3 0-2-3" />
  </Svg>
);
export default SvgFileTypeRs;
