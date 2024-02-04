import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHelicopter = ({
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
    <Path d="m3 10 1 2h6M12 9a2 2 0 0 0-2 2v3c0 1.1.9 2 2 2h7a2 2 0 0 0 2-2c0-3.31-3.13-5-7-5zM13 9V6M5 6h15" />
    <Path d="M15 9.1V13h5.5M15 19v-3M19 19h-8" />
  </Svg>
);
export default SvgHelicopter;
