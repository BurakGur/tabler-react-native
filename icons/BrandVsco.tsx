import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandVsco = ({
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
    className="icon icon-tabler icon-tabler-brand-vsco"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
    <Path d="M17 12a5 5 0 1 0-10 0 5 5 0 0 0 10 0M12 3v4M21 12h-4M12 21v-4M3 12h4M18.364 5.636l-2.828 2.828M18.364 18.364l-2.828-2.828M5.636 18.364l2.828-2.828M5.636 5.636l2.828 2.828" />
  </Svg>
);
export default SvgBrandVsco;
