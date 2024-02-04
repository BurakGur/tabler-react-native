import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEyeEdit = ({
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
    <Path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <Path d="M11.192 17.966Q6.33 17.546 3 12q3.6-6 9-6 4.989 0 8.442 5.122M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z" />
  </Svg>
);
export default SvgEyeEdit;
