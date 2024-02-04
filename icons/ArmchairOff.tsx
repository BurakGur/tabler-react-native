import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArmchairOff = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-armchair-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M17 13a2 2 0 1 1 4 0v4m-2 2H5a2 2 0 0 1-2-2v-4a2 2 0 1 1 4 0v2h8.036" />
    <Path d="M5 11V6a3 3 0 0 1 .134-.89m1.987-1.98A3 3 0 0 1 8 3h8a3 3 0 0 1 3 3v5M6 19v2M18 19v2M3 3l18 18" />
  </Svg>
);
export default SvgArmchairOff;
