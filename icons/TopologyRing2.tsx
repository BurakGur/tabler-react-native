import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTopologyRing2 = ({
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
    <Path d="M14 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M21 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7 18h10M18 16l-5-8M11 8l-5 8" />
  </Svg>
);
export default SvgTopologyRing2;
