import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandStackshare = ({
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
    className="icon icon-tabler icon-tabler-brand-stackshare"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M17 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 12h3l3.5 6H17M17 6h-3.5L10 12" />
  </Svg>
);
export default SvgBrandStackshare;
