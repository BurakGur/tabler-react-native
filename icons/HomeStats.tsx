import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeStats = ({
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
    <Path d="M19 13v-1h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h2.5" />
    <Path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2M13 22l3-3 2 2 4-4" />
    <Path d="M19 17h3v3" />
  </Svg>
);
export default SvgHomeStats;
