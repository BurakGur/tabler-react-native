import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlayVolleyball = ({
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
    <Path d="M13 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    <Path fill="currentColor" d="M20.5 10a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
    <Path d="m2 16 5 1 .5-2.5M11.5 21l2.5-5.5L8.5 12 12 8l3 4 4 2" />
  </Svg>
);
export default SvgPlayVolleyball;
