import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEscalatorDown = ({
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
    className="icon icon-tabler icon-tabler-escalator-down"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4.5 7h2.733a2 2 0 0 1 1.337.513L18 16h1.5a2.5 2.5 0 1 1 0 5h-2.733a2 2 0 0 1-1.337-.513L6 12H4.5a2.5 2.5 0 1 1 0-5M18 3v7M15 7l3 3 3-3" />
  </Svg>
);
export default SvgEscalatorDown;
