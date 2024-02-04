import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTransform = ({
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
    <Path d="M3 6a3 3 0 1 0 6 0 3 3 0 0 0-6 0M21 11V8a2 2 0 0 0-2-2h-6l3 3m0-6-3 3M3 13v3a2 2 0 0 0 2 2h6l-3-3m0 6 3-3M15 18a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
  </Svg>
);
export default SvgTransform;
