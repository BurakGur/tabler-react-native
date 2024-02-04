import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShirtOff = ({
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
    className="icon icon-tabler icon-tabler-shirt-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8.243 4.252 9 4c0 .43.09.837.252 1.206m1.395 1.472A3 3 0 0 0 15 4l6 2v5h-3v3m0 4v1a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8H3V6l2.26-.753M3 3l18 18" />
  </Svg>
);
export default SvgShirtOff;
