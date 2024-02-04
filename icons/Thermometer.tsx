import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgThermometer = ({
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
    className="icon icon-tabler icon-tabler-thermometer"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M19 5a2.83 2.83 0 0 1 0 4l-8 8H7v-4l8-8a2.83 2.83 0 0 1 4 0M16 7l-1.5-1.5M13 10l-1.5-1.5M10 13l-1.5-1.5M7 17l-3 3" />
  </Svg>
);
export default SvgThermometer;
