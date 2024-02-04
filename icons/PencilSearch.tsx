import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPencilSearch = ({
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
    <Path d="m17 11 1.5-1.5a2.828 2.828 0 1 0-4-4L4 16v4h4l3-3M13.5 6.5l4 4M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M20.2 20.2 22 22" />
  </Svg>
);
export default SvgPencilSearch;
