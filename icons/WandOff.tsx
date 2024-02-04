import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWandOff = ({
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
    <Path d="M10.5 10.5 3 18l3 3 7.5-7.5m2-2L21 6l-3-3-5.5 5.5M15 6l3 3M8.433 4.395C8.783 4.035 9 3.543 9 3a2 2 0 0 0 2 2c-.554 0-1.055.225-1.417.589M18.418 14.41c.36-.36.582-.86.582-1.41a2 2 0 0 0 2 2c-.555 0-1.056.226-1.419.59M3 3l18 18" />
  </Svg>
);
export default SvgWandOff;
