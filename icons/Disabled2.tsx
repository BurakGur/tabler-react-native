import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDisabled2 = ({
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
    className="icon icon-tabler icon-tabler-disabled-2"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M15 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M9 11a5 5 0 1 0 3.95 7.95" />
    <Path d="m19 20-4-5h-4l3-5-4-3-4 1" />
  </Svg>
);
export default SvgDisabled2;
