import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCat = ({
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
    <Path d="M20 3v10a8 8 0 1 1-16 0V3l3.432 3.432A7.96 7.96 0 0 1 12 5c1.769 0 3.403.574 4.728 1.546z" />
    <Path d="M2 16h5l-4 4M22 16h-5l4 4M11 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9 11v.01M15 11v.01" />
  </Svg>
);
export default SvgCat;
