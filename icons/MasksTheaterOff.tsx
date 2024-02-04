import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMasksTheaterOff = ({
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
    className="icon icon-tabler icon-tabler-masks-theater-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M13 9h6.808a2 2 0 0 1 1.992 2.183l-.554 6.041m-1.286 2.718A4 4 0 0 1 17.25 21h-1.5a4 4 0 0 1-3.983-3.635l-.567-6.182M18 13h.01" />
    <Path d="M15 16.5q.985.657 1.97.451M8.632 15.982A4 4 0 0 1 8.25 16h-1.5a4 4 0 0 1-3.983-3.635L2.2 6.183a2 2 0 0 1 .514-1.531A2 2 0 0 1 4 4m4 0h2.808a2 2 0 0 1 2 2M6 8h.01" />
    <Path d="M6 12q1.146-.765 2.291-.36M3 3l18 18" />
  </Svg>
);
export default SvgMasksTheaterOff;
