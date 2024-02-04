import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBusinessplan = ({
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
    className="icon icon-tabler icon-tabler-businessplan"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M11 6a5 3 0 1 0 10 0 5 3 0 1 0-10 0" />
    <Path d="M11 6v4c0 1.657 2.239 3 5 3s5-1.343 5-3V6" />
    <Path d="M11 10v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4" />
    <Path d="M11 14v4c0 1.657 2.239 3 5 3s5-1.343 5-3v-4M7 9H4.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H3M5 15v1m0-8v1" />
  </Svg>
);
export default SvgBusinessplan;
