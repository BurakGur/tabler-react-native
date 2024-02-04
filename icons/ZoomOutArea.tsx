import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgZoomOutArea = ({
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
    className="icon icon-tabler icon-tabler-zoom-out-area"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M13 15h4M10 15a5 5 0 1 0 10 0 5 5 0 1 0-10 0M22 22l-3-3M6 18H5a2 2 0 0 1-2-2v-1M3 11v-1M3 6V5a2 2 0 0 1 2-2h1M10 3h1M15 3h1a2 2 0 0 1 2 2v1" />
  </Svg>
);
export default SvgZoomOutArea;
