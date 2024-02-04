import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileSymlink = ({
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
    <Path d="M4 21v-4a3 3 0 0 1 3-3h5" />
    <Path d="m9 17 3-3-3-3M14 3v4a1 1 0 0 0 1 1h4" />
    <Path d="M5 11V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2H7.5" />
  </Svg>
);
export default SvgFileSymlink;
