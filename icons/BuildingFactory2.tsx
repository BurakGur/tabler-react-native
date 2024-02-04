import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBuildingFactory2 = ({
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
    <Path d="M3 21h18M5 21V9l5 4V9l5 4h4" />
    <Path d="M19 21v-8l-1.436-9.574A.5.5 0 0 0 17.069 3h-1.145a.5.5 0 0 0-.494.418L14 12M9 17h1M14 17h1" />
  </Svg>
);
export default SvgBuildingFactory2;
