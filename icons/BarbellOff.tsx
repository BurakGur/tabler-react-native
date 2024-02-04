import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBarbellOff = ({
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
    className="icon icon-tabler icon-tabler-barbell-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M2 12h1M6 8H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2M6.298 6.288A1 1 0 0 0 6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9M9 12h3M15 15v2a1 1 0 0 0 1 1h1c.275 0 .523-.11.704-.29M18 14V7a1 1 0 0 0-1-1h-1a1 1 0 0 0-1 1v4M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1M22 12h-1M3 3l18 18" />
  </Svg>
);
export default SvgBarbellOff;
