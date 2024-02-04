import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMoodNerd = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-mood-nerd"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <Path d="M6 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0M14 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0M9.5 15a3.5 3.5 0 0 0 5 0M3.5 9H6M18 9h2.5M10 9.5q2-2 4 0" />
  </Svg>
);
export default SvgMoodNerd;
