import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMoodTongueWink = ({
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
    <Path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18" />
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M9 10h.01" />
    <Path d="M10 14v2a2 2 0 0 0 4 0v-2M15.5 14h-7M17 10c-.5-1-2.5-1-3 0" />
  </Svg>
);
export default SvgMoodTongueWink;
