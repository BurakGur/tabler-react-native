import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCurrencyDollarGuyanese = ({
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
    <Path d="M21 6h-4a3 3 0 0 0 0 6h1a3 3 0 0 1 0 6h-4M10 6H7a4 4 0 0 0-4 4v4a4 4 0 0 0 4 4h3v-6H8M17 20v-2M18 6V4" />
  </Svg>
);
export default SvgCurrencyDollarGuyanese;
