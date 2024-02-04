import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDatabaseX = ({
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
    <Path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
    <Path d="M4 6v6c0 1.657 3.582 3 8 3q.807 0 1.57-.058M20 13.5V6" />
    <Path d="M4 12v6c0 1.657 3.582 3 8 3q.577 0 1.132-.03M22 22l-5-5M17 22l5-5" />
  </Svg>
);
export default SvgDatabaseX;
