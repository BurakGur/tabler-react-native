import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMoonOff = ({
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
    <Path d="M7.962 3.949A9 9 0 0 1 12 2.992V3h.393a7.5 7.5 0 0 0-2.07 3.308m-.141 3.84c.186.823.514 1.626.989 2.373a7.5 7.5 0 0 0 4.586 3.268m3.893-.11q.334-.1.663-.233a9 9 0 0 1-.274.597m-1.695 2.337A9 9 0 0 1 5.634 5.631M3 3l18 18" />
  </Svg>
);
export default SvgMoonOff;
