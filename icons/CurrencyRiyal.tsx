import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCurrencyRiyal = ({
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
    <Path d="M15 9v2a2 2 0 1 1-4 0v-1 1a2 2 0 1 1-4 0v-1 4a2 2 0 1 1-4 0v-2M18 12.01V12M22 10v1a5 5 0 0 1-5 5" />
  </Svg>
);
export default SvgCurrencyRiyal;
