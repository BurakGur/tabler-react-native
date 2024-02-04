import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAbacusOff = ({
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
    <Path d="M5 5v16M19 21v-2m0-4V3M5 7h2m4 0h8M5 15h10M8 13v4M11 13v4M16 16v1M14 5v4M11 5v2M8 8v1M3 21h18M3 3l18 18" />
  </Svg>
);
export default SvgAbacusOff;
