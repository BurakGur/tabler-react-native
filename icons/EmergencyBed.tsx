import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEmergencyBed = ({
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
    <Path d="M14 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 8l2.1 2.8A3 3 0 0 0 8.5 12H20M10 6h4M12 4v4" />
    <Path d="M12 12v2l-2.5 2.5M14.5 16.5 12 14" />
  </Svg>
);
export default SvgEmergencyBed;
