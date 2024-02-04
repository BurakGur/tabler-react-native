import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTargetOff = ({
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
    <Path d="M11.286 11.3a1 1 0 0 0 1.41 1.419" />
    <Path d="M8.44 8.49a5 5 0 0 0 7.098 7.044m1.377-2.611a5 5 0 0 0-5.846-5.836" />
    <Path d="M5.649 5.623a9 9 0 1 0 12.698 12.758m1.683-2.313A9 9 0 0 0 7.954 3.958M3 3l18 18" />
  </Svg>
);
export default SvgTargetOff;
