import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMoodUp = ({
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
    <Path d="M20.984 12.536a9 9 0 1 0-8.463 8.449M19 22v-6M22 19l-3-3-3 3M9 10h.01M15 10h.01" />
    <Path d="M9.5 15c.658.64 1.56 1 2.5 1s1.842-.36 2.5-1" />
  </Svg>
);
export default SvgMoodUp;
