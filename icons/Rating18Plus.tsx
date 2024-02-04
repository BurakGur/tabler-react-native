import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRating18Plus = ({
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
    className="icon icon-tabler icon-tabler-rating-18-plus"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <Path d="M10 10.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0" />
    <Path d="M10 13.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M7 15V9M15.5 12h3M17 10.5v3" />
  </Svg>
);
export default SvgRating18Plus;
