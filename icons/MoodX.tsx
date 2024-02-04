import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMoodX = ({
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
    <Path d="M20.983 12.556a9 9 0 1 0-8.433 8.427M9 10h.01M15 10h.01" />
    <Path d="M9.5 15c.658.64 1.56 1 2.5 1q.292 0 .574-.045M21.5 21.5l-5-5M16.5 21.5l5-5" />
  </Svg>
);
export default SvgMoodX;
