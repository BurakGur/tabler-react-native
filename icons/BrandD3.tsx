import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandD3 = ({
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
    className="icon icon-tabler icon-tabler-brand-d3"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 4h1.8C8.776 4 12 7.582 12 12s-3.224 8-7.2 8H3M12 4h5.472C19.42 4 21 5.79 21 8s-1.58 4-3.528 4M17.472 12H15M17.472 12H15.12M17.472 12C19.42 12 21 13.79 21 16s-1.58 4-3.528 4H12" />
  </Svg>
);
export default SvgBrandD3;
