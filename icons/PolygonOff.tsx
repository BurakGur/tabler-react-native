import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPolygonOff = ({
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
    <Path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0M13 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6.5 9.5l1.546-1.311M14 5.5 17 7M18.5 10l-1.185 3.318m-1.062 2.972L16 17M13.5 17.5l-7-5M3 3l18 18" />
  </Svg>
);
export default SvgPolygonOff;
