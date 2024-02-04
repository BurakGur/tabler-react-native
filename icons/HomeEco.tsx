import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeEco = ({
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
    <Path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h5" />
    <Path d="M9 21v-6a2 2 0 0 1 2-2h2c.325 0 .631.077.902.215M16 22s0-2 3-4" />
    <Path d="M19 21a3 3 0 0 1 0-6h3v3a3 3 0 0 1-3 3" />
  </Svg>
);
export default SvgHomeEco;
