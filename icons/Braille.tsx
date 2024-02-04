import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBraille = ({
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
    <Path d="M15 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 5a1 1 0 1 0 2 0 1 1 0 0 0-2 0M7 19a1 1 0 1 0 2 0 1 1 0 0 0-2 0M16 12h.01M8 12h.01M16 19h.01" />
  </Svg>
);
export default SvgBraille;
