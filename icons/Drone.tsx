import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDrone = ({
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
    <Path d="M10 10h4v4h-4zM10 10 6.5 6.5M9.96 6A3.5 3.5 0 1 0 6 9.96M14 10l3.5-3.5M18 9.96A3.5 3.5 0 1 0 14.04 6M14 14l3.5 3.5M14.04 18A3.5 3.5 0 1 0 18 14.04M10 14l-3.5 3.5M6 14.04A3.5 3.5 0 1 0 9.96 18" />
  </Svg>
);
export default SvgDrone;
