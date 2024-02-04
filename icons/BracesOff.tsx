import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBracesOff = ({
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
    <Path d="M5.176 5.177C5.063 5.428 5 5.707 5 6v3c0 1.657-.895 3-2 3 1.105 0 2 1.343 2 3v3a2 2 0 0 0 2 2M17 4a2 2 0 0 1 2 2v3c0 1.657.895 3 2 3-1.105 0-2 1.343-2 3m-.176 3.821A2 2 0 0 1 17 20M3 3l18 18" />
  </Svg>
);
export default SvgBracesOff;
