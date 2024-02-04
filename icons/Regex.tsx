import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRegex = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-regex"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M6.5 15a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5M17 7.875l3-1.687M17 7.875v3.375M17 7.875l-3-1.687M17 7.875l3 1.688M17 4.5v3.375M17 7.875l-3 1.688" />
  </Svg>
);
export default SvgRegex;
