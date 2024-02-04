import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCherry = ({
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
    <Path d="M4 16.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M14 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <Path d="M9 13c.366-2 1.866-3.873 4.5-5.6M17 15c-1.333-2.333-2.333-5.333-1-9" />
    <Path d="M5 6q5.5-4 11 0-5.5 4-11 0" />
  </Svg>
);
export default SvgCherry;
