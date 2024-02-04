import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandOnlyfans = ({
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
    <Path d="M8.5 6a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13" />
    <Path d="M8.5 15a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5M14 16c2.5 0 6.42-1.467 7-4h-6c3-1 6.44-3.533 7-6h-4c-3.03 0-3.764-.196-5 1.5" />
  </Svg>
);
export default SvgBrandOnlyfans;
