import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgZoomPan = ({
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
    <Path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M17 17l-2.5-2.5M10 5l2-2 2 2M19 10l2 2-2 2M5 10l-2 2 2 2M10 19l2 2 2-2" />
  </Svg>
);
export default SvgZoomPan;
