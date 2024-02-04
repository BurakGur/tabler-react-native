import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMoodShare = ({
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
    <Path d="M20.942 13.018A9 9 0 1 0 12 21M9 10h.01M15 10h.01" />
    <Path d="M9.5 15c.658.672 1.56 1 2.5 1q.32 0 .63-.05M16 22l5-5M21 21.5V17h-4.5" />
  </Svg>
);
export default SvgMoodShare;
