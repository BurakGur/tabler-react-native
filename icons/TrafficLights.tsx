import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTrafficLights = ({
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
    <Path d="M7 7a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5h0a5 5 0 0 1-5-5z" />
    <Path d="M11 7a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </Svg>
);
export default SvgTrafficLights;
