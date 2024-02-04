import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCoinTaka = ({
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
    <Path d="m8 8 .553-.276A1 1 0 0 1 10 8.618V15a2 2 0 0 0 2 2h.5a2.5 2.5 0 0 0 2.5-2.5V14h-1M8 11h7" />
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0" />
  </Svg>
);
export default SvgCoinTaka;
