import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTagOff = ({
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
    <Path d="M7.149 7.144A.498.498 0 0 0 7.5 8a.5.5 0 0 0 .341-.135" />
    <Path d="M3.883 3.875A3 3 0 0 0 3 6v5.172a2 2 0 0 0 .586 1.414l7.71 7.71a2.41 2.41 0 0 0 3.408 0L17.5 17.5m2.005-2.005.79-.79a2.41 2.41 0 0 0 0-3.41l-7.71-7.71A2 2 0 0 0 11.173 3H7M3 3l18 18" />
  </Svg>
);
export default SvgTagOff;
