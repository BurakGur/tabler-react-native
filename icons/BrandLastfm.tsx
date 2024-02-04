import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandLastfm = ({
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
    <Path d="M20 8c-.83-1-1.388-1-2-1s-2 .271-2 2 1.384 2.233 3 3 2.125 1.812 2 3-1 2-3 2-3-1-3.5-2-1.585-4.78-2.497-6a5 5 0 1 0-1 7" />
  </Svg>
);
export default SvgBrandLastfm;
