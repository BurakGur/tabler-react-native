import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMeterCube = ({
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
    <Path d="M17 5h1.5a1.5 1.5 0 0 1 0 3H18h.5a1.5 1.5 0 0 1 0 3H17M4 12v6M4 14a2 2 0 0 1 2-2h.5A2.5 2.5 0 0 1 9 14.5V18M9 15.5v-1a2.5 2.5 0 1 1 5 0V18" />
  </Svg>
);
export default SvgMeterCube;
