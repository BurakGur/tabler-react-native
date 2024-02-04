import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMasksTheater = ({
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
    <Path d="M13.192 9h6.616a2 2 0 0 1 1.992 2.183l-.567 6.182A4 4 0 0 1 17.25 21h-1.5a4 4 0 0 1-3.983-3.635l-.567-6.182A2 2 0 0 1 13.192 9M15 13h.01M18 13h.01" />
    <Path d="M15 16.5q1.5 1 3 0M8.632 15.982A4 4 0 0 1 8.25 16h-1.5a4 4 0 0 1-3.983-3.635L2.2 6.183A2 2 0 0 1 4.192 4h6.616a2 2 0 0 1 2 2M6 8h.01M9 8h.01" />
    <Path d="M6 12q1.146-.765 2.291-.36" />
  </Svg>
);
export default SvgMasksTheater;
