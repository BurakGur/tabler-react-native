import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgOld = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m11 21-1-4-2-3V8" />
    <Path d="m5 14-1-3 4-3 3 2 3 .5M7 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M7 17l-2 4M16 21v-8.5a1.5 1.5 0 0 1 3 0v.5" />
  </Svg>
);
export default SvgOld;
