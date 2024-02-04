import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileTypeXml = ({
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
    <Path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M4 15l4 6M4 21l4-6M19 15v6h3M11 21v-6l2.5 3 2.5-3v6" />
  </Svg>
);
export default SvgFileTypeXml;
