import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgListLetters = ({
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
    <Path d="M11 6h9M11 12h9M11 18h9M4 10V5.5a1.5 1.5 0 0 1 3 0V10M4 8h3M4 20h1.5a1.5 1.5 0 0 0 0-3H4h1.5a1.5 1.5 0 0 0 0-3H4z" />
  </Svg>
);
export default SvgListLetters;
