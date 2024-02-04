import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGasStationOff = ({
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
    <Path d="M15 11a2 2 0 0 1 2 2m3 3V9l-3-3M4 20V6c0-.548.22-1.044.577-1.405M8 4h4a2 2 0 0 1 2 2v4m0 4v6M3 20h12" />
    <Path d="M18 7v1a1 1 0 0 0 1 1h1M4 11h7M3 3l18 18" />
  </Svg>
);
export default SvgGasStationOff;
