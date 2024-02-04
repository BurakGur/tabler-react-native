import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAtOff = ({
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
    <Path d="M9.174 9.17a4 4 0 0 0 5.646 5.668M16 12a4 4 0 0 0-4-4" />
    <Path d="M19.695 15.697A2.5 2.5 0 0 0 21 13.5V12A9 9 0 0 0 7.945 3.953M5.623 5.636A9 9 0 0 0 15.5 20.28M3 3l18 18" />
  </Svg>
);
export default SvgAtOff;
