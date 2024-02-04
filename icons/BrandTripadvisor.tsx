import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandTripadvisor = ({
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
    className="icon icon-tabler icon-tabler-brand-tripadvisor"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M5 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M16 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0" />
    <Path d="M17.5 9a4.5 4.5 0 1 0 3.5 1.671L22 9zM6.5 9A4.5 4.5 0 1 1 3 10.671L2 9z" />
    <Path d="m10.5 15.5 1.5 2 1.5-2M9 6.75q3-1 6 0" />
  </Svg>
);
export default SvgBrandTripadvisor;
