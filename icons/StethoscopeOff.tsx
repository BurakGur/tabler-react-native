import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStethoscopeOff = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-stethoscope-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4.172 4.179A2 2 0 0 0 3 6v3.5a5.5 5.5 0 0 0 9.856 3.358M14 10V6a2 2 0 0 0-2-2h-1" />
    <Path d="M8 15a6 6 0 0 0 10.714 3.712m1.216-2.798q.07-.45.07-.914v-3M11 3v2" />
    <Path d="M18 10a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 3l18 18" />
  </Svg>
);
export default SvgStethoscopeOff;
