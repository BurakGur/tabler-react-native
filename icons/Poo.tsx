import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPoo = ({
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
    <Path d="M10 12h.01M14 12h.01M10 16a3.5 3.5 0 0 0 4 0" />
    <Path d="M11 4c2 0 3.5 1.5 3.5 4h.164a2.5 2.5 0 0 1 2.196 3.32 3 3 0 0 1 1.615 3.063 3 3 0 0 1-1.299 5.607H7a3 3 0 0 1-1.474-5.613 3 3 0 0 1 1.615-3.062 2.5 2.5 0 0 1 2.195-3.32H9.5c1.5 0 2.5-2 1.5-4z" />
  </Svg>
);
export default SvgPoo;
