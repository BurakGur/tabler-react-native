import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSteam = ({
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
    <Path d="M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M19 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 20a1 1 0 1 0 2 0 1 1 0 1 0-2 0M5.5 5.5l3 3M15.5 15.5l3 3M18.5 5.5l-3 3M8.5 15.5l-3 3" />
  </Svg>
);
export default SvgSteam;
