import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCircles = ({
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
    className="icon icon-tabler icon-tabler-circles"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8 7a4 4 0 1 0 8 0 4 4 0 1 0-8 0M2.5 17a4 4 0 1 0 8 0 4 4 0 1 0-8 0M13.5 17a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
  </Svg>
);
export default SvgCircles;
