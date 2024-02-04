import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeSignal = ({
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
    <Path d="M15 22v-2M18 22v-4M21 22v-6M19 12.494V12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h4" />
    <Path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v.5" />
  </Svg>
);
export default SvgHomeSignal;
