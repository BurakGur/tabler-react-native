import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEaseInOutControlPoints = ({
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
    <Path d="M17 20a2 2 0 1 0 4 0 2 2 0 0 0-4 0M17 20h-2M7 4a2 2 0 1 1-4 0 2 2 0 0 1 4 0M7 4h2M14 4h-2M12 20h-2M3 20c8 0 10-16 18-16" />
  </Svg>
);
export default SvgEaseInOutControlPoints;
