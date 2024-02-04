import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEraserOff = ({
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
    <Path d="m3 3 18 18M19 20H8.5l-4.21-4.3a1 1 0 0 1 0-1.41l5-4.993m2.009-2.01 3-3a1 1 0 0 1 1.41 0l5 5a1 1 0 0 1 0 1.41q-2.125 2.147-2.97 3m-2.02 2.043-4.211 4.256M18 13.3 11.7 7" />
  </Svg>
);
export default SvgEraserOff;
