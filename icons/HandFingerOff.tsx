import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHandFingerOff = ({
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
    <Path d="M8 13V8M8.06 4.077A1.5 1.5 0 0 1 11 4.5V7m0 4v1M12.063 8.065A1.5 1.5 0 0 1 14 9.5v.5M14.06 10.082A1.5 1.5 0 0 1 17 10.5V12" />
    <Path d="M17 11.5a1.5 1.5 0 0 1 3 0V16m-.88 3.129A6 6 0 0 1 14 22h-2 .208a6 6 0 0 1-5.012-2.7L7 19q-.468-.718-3.286-5.728a1.5 1.5 0 0 1 .536-2.022 1.87 1.87 0 0 1 2.28.28L8 13M3 3l18 18" />
  </Svg>
);
export default SvgHandFingerOff;
