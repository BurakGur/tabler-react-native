import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArmchair2 = ({
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
    <Path d="M5 10V6a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v4" />
    <Path d="M16 15v-2a3 3 0 1 1 3 3v3H5v-3a3 3 0 1 1 3-3v2M8 12h8M7 19v2M17 19v2" />
  </Svg>
);
export default SvgArmchair2;
