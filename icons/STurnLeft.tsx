import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSTurnLeft = ({
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
    <Path d="M19 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
    <Path d="M17 5H7.5a3.5 3.5 0 0 0 0 7h9a3.5 3.5 0 0 1 0 7H3" />
    <Path d="m6 16-3 3 3 3" />
  </Svg>
);
export default SvgSTurnLeft;
