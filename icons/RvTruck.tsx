import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRvTruck = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-rv-truck"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M5 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M9 17h6" />
    <Path d="M19 17h1a1 1 0 0 0 1-1v-4.528a2 2 0 0 0-.211-.894l-.96-1.92A3 3 0 0 0 17.146 7H6a3 3 0 0 0-3 3v6a1 1 0 0 0 1 1h1M3 12h18M15 12V7M6 5.5A1.5 1.5 0 0 1 7.5 4h7A1.5 1.5 0 0 1 16 5.5v0A1.5 1.5 0 0 1 14.5 7h-7A1.5 1.5 0 0 1 6 5.5" />
  </Svg>
);
export default SvgRvTruck;
