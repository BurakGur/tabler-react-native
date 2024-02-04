import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArtboardOff = ({
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
    <Path d="M12 8h3a1 1 0 0 1 1 1v3M15.716 15.698A1 1 0 0 1 15 16H9a1 1 0 0 1-1-1V9c0-.273.11-.52.287-.7M3 8h1M3 16h1M8 3v1M16 3v1M20 8h1M20 16h1M8 20v1M16 20v1M3 3l18 18" />
  </Svg>
);
export default SvgArtboardOff;
