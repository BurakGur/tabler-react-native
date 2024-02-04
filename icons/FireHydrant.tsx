import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFireHydrant = ({
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
    <Path d="M5 21h14M17 21v-5h1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-1V8A5 5 0 0 0 7 8v4H6a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h1v5" />
    <Path d="M10 14a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 8h12" />
  </Svg>
);
export default SvgFireHydrant;
