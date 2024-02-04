import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBulldozer = ({
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
    <Path d="M2 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M19 13v4a2 2 0 0 0 2 2h1M14 19H4M4 15h10" />
    <Path d="M9 11V6h2a3 3 0 0 1 3 3v6" />
    <Path d="M5 15v-3a1 1 0 0 1 1-1h8M19 17h-3" />
  </Svg>
);
export default SvgBulldozer;
