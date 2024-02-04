import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMassage = ({
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
    <Path d="M3 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 22l4-2v-3h12M11 20h9M8 14l3-2 1-4c3 1 3 4 3 6" />
  </Svg>
);
export default SvgMassage;
