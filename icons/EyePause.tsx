import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEyePause = ({
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
    <Path d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <Path d="M13.022 17.945A9 9 0 0 1 12 18q-5.4 0-9-6 3.6-6 9-6t9 6q-.293.487-.596.935M17 17v5M21 17v5" />
  </Svg>
);
export default SvgEyePause;
