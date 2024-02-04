import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCircuitAmmeter = ({
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
    <Path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0M5 12H2M19 12h3" />
    <Path d="M10 14v-3c0-1.036.895-2 2-2s2 .964 2 2v3M14 12h-4" />
  </Svg>
);
export default SvgCircuitAmmeter;
