import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileTypeTxt = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <Path d="M14 3v4a1 1 0 0 0 1 1h4M16.5 15h3" />
    <Path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M4.5 15h3M6 15v6M18 15v6M10 15l4 6M10 21l4-6" />
  </Svg>
);
export default SvgFileTypeTxt;
