import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBarrel = ({
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
    <Path d="M7.278 4h9.444a2 2 0 0 1 1.841 1.22Q20 8.61 20 12t-1.437 6.78A2 2 0 0 1 16.722 20H7.278a2 2 0 0 1-1.841-1.22Q4 15.39 4 12t1.437-6.78A2 2 0 0 1 7.278 4" />
    <Path d="M14 4q1 4 1 8c0 4-.333 5.333-1 8M10 4q-1 4-1 8c0 4 .333 5.333 1 8M4.5 16h15M19.5 8h-15" />
  </Svg>
);
export default SvgBarrel;
