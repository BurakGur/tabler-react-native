import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrightness2 = ({
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
    className="icon icon-tabler icon-tabler-brightness-2"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <Path d="M6 6h3.5L12 3.5 14.5 6H18v3.5l2.5 2.5-2.5 2.5V18h-3.5L12 20.5 9.5 18H6v-3.5L3.5 12 6 9.5z" />
  </Svg>
);
export default SvgBrightness2;
