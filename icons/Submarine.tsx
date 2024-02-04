import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSubmarine = ({
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
    <Path d="M3 11v6h2l1-1.5L9 17h10a3 3 0 0 0 0-6H9h0l-3 1.5L5 11zM17 11l-1-3h-5l-1 3M13 8V6a1 1 0 0 1 1-1h1" />
  </Svg>
);
export default SvgSubmarine;
