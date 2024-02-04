import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandLoom = ({
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
    <Path d="M17.464 6.518a6 6 0 1 0-3.023 7.965" />
    <Path d="M17.482 17.464a6 6 0 1 0-7.965-3.023" />
    <Path d="M6.54 17.482a6 6 0 1 0 3.024-7.965" />
    <Path d="M6.518 6.54a6 6 0 1 0 7.965 3.024" />
  </Svg>
);
export default SvgBrandLoom;
