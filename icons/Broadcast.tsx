import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBroadcast = ({
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
    <Path d="M18.364 19.364a9 9 0 1 0-12.728 0" />
    <Path d="M15.536 16.536a5 5 0 1 0-7.072 0" />
    <Path d="M11 13a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </Svg>
);
export default SvgBroadcast;
