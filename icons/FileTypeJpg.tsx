import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileTypeJpg = ({
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
    <Path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M11 18h1.5a1.5 1.5 0 0 0 0-3H11v6M20 15h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v-3M5 15h3v4.5a1.5 1.5 0 0 1-3 0" />
  </Svg>
);
export default SvgFileTypeJpg;
