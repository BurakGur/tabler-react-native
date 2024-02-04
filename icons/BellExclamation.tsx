import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBellExclamation = ({
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
    <Path d="M15 17H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6 2 2 0 1 1 4 0 7 7 0 0 1 4 6v1.5M9 17v1a3 3 0 0 0 6 0v-1M19 16v3M19 22v.01" />
  </Svg>
);
export default SvgBellExclamation;
