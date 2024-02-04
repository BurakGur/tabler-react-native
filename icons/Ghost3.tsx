import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGhost3 = ({
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
    <Path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1-3.1 1.4 1.65 1.65 0 0 0-2.6 0 1.65 1.65 0 0 1-2.6 0 1.65 1.65 0 0 0-2.6 0A1.78 1.78 0 0 1 5 18zM10 10h.01M14 10h.01" />
  </Svg>
);
export default SvgGhost3;
