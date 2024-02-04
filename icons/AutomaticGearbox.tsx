import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAutomaticGearbox = ({
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
    <Path d="M17 17v4h1a2 2 0 1 0 0-4zM17 11h1.5a1.5 1.5 0 0 0 0-3H17v5M3 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <Path d="M5 7v3a1 1 0 0 0 1 1h3v7a1 1 0 0 0 1 1h3M9 11h4" />
  </Svg>
);
export default SvgAutomaticGearbox;
