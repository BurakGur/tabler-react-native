import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGripHorizontal = ({
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
    <Path d="M4 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0M18 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M18 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </Svg>
);
export default SvgGripHorizontal;
