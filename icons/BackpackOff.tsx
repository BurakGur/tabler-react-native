import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBackpackOff = ({
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
    className="icon icon-tabler icon-tabler-backpack-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M10 6h3a6 6 0 0 1 6 6v3m-.129 3.872A3 3 0 0 1 16 21H8a3 3 0 0 1-3-3v-6a5.99 5.99 0 0 1 2.285-4.712M10 6V5a2 2 0 1 1 4 0v1" />
    <Path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4M3 3l18 18" />
  </Svg>
);
export default SvgBackpackOff;
