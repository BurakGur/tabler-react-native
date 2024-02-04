import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgConfettiOff = ({
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
    <Path d="M4 5h1M5 5v1M11.5 4 11 6M18 5h2M19 4v2M15 9l-1 1M18 13l2-.5M18 19h1M19 19v1M14 16.518 7.482 10l-4.39 9.58a1 1 0 0 0 1.329 1.329zM3 3l18 18" />
  </Svg>
);
export default SvgConfettiOff;
