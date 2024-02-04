import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLifebuoy = ({
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
    <Path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M15 15l3.35 3.35M9 15l-3.35 3.35M5.65 5.65 9 9M18.35 5.65 15 9" />
  </Svg>
);
export default SvgLifebuoy;
