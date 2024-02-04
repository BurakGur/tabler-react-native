import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgParenthesesOff = ({
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
    <Path d="M5.743 5.745A12.25 12.25 0 0 0 7 20M17 4a12.25 12.25 0 0 1 2.474 11.467m-1.22 2.794A12.3 12.3 0 0 1 17 20M3 3l18 18" />
  </Svg>
);
export default SvgParenthesesOff;
