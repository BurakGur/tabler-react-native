import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgToolsKitchen2Off = ({
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
    <Path d="M14.386 10.409C14.916 8.129 16.152 5.717 19 3v12m-4 0h-1v-.941M19 19v2h-1v-3M8 8v13M5 5v2a3 3 0 0 0 4.546 2.572M11 7V4M3 3l18 18" />
  </Svg>
);
export default SvgToolsKitchen2Off;
