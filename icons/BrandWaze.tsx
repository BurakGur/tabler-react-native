import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandWaze = ({
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
    <Path d="M6.66 17.52A7 7 0 0 1 3 13c2 0 3-1 3-2.51C6 6.57 8.25 3 13.38 3 18 3 21 6.51 21 11a8.08 8.08 0 0 1-3.39 6.62M10 18.69a17.3 17.3 0 0 0 3.33.3h.54" />
    <Path d="M14 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M6 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16 9h.01M11 9h.01" />
  </Svg>
);
export default SvgBrandWaze;
