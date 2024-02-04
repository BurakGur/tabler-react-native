import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChristmasTreeOff = ({
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
    <Path d="M9.5 5.5 12 3l4 4-2 1 4 4-1.5.5M17 17H5l4-4-3-1 3-3M14 17v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3M3 3l18 18" />
  </Svg>
);
export default SvgChristmasTreeOff;
