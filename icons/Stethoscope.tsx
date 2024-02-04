import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStethoscope = ({
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
    <Path d="M6 4H5a2 2 0 0 0-2 2v3.5h0a5.5 5.5 0 0 0 11 0V6a2 2 0 0 0-2-2h-1" />
    <Path d="M8 15a6 6 0 1 0 12 0v-3M11 3v2M6 3v2" />
    <Path d="M18 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
  </Svg>
);
export default SvgStethoscope;
