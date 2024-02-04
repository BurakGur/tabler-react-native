import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHandGrab = ({
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
    className="icon icon-tabler icon-tabler-hand-grab"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8 11V7.5a1.5 1.5 0 0 1 3 0V10M11 9.5v-3a1.5 1.5 0 0 1 3 0V10M14 7.5a1.5 1.5 0 0 1 3 0V10" />
    <Path d="M17 9.5a1.5 1.5 0 0 1 3 0V14a6 6 0 0 1-6 6h-2 .208a6 6 0 0 1-5.012-2.7L7 17q-.468-.718-3.286-5.728A1.5 1.5 0 0 1 4.25 9.25a1.87 1.87 0 0 1 2.28.28L8 11" />
  </Svg>
);
export default SvgHandGrab;
