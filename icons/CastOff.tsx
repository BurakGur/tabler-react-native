import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCastOff = ({
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
    className="icon icon-tabler icon-tabler-cast-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 19h.01M7 19a4 4 0 0 0-4-4M11 19a8 8 0 0 0-8-8M15 19h3a3 3 0 0 0 .875-.13m2-2a3 3 0 0 0 .128-.868v-8a3 3 0 0 0-3-3h-9m-3.865.136a3 3 0 0 0-1.935 1.864M3 3l18 18" />
  </Svg>
);
export default SvgCastOff;
