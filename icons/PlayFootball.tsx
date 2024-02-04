import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlayFootball = ({
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
    <Path d="M11 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 17l5 1 .75-1.5M14 21v-4l-4-3 1-6" />
    <Path d="M6 12V9l5-1 3 3 3 1" />
    <Path fill="currentColor" d="M19.5 20a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
  </Svg>
);
export default SvgPlayFootball;
