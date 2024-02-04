import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBuildingCarousel = ({
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
    <Path d="M6 12a6 6 0 1 0 12 0 6 6 0 1 0-12 0" />
    <Path d="M3 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 8a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 16a2 2 0 1 0 4 0 2 2 0 1 0-4 0M8 22l4-10 4 10" />
  </Svg>
);
export default SvgBuildingCarousel;
