import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGavel = ({
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
    <Path d="m13 10 7.383 7.418c.823.82.823 2.148 0 2.967a2.11 2.11 0 0 1-2.976 0L10 13M6 9l4 4M13 10 9 6M3 21h7" />
    <Path d="m6.793 15.793-3.586-3.586a1 1 0 0 1 0-1.414L5.5 8.5 6 9l3-3-.5-.5 2.293-2.293a1 1 0 0 1 1.414 0l3.586 3.586a1 1 0 0 1 0 1.414L13.5 10.5 13 10l-3 3 .5.5-2.293 2.293a1 1 0 0 1-1.414 0" />
  </Svg>
);
export default SvgGavel;
