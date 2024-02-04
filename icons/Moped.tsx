import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMoped = ({
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
    className="icon icon-tabler icon-tabler-moped"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M16 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 16v1a2 2 0 0 0 4 0v-5H6a3 3 0 0 0-3 3v1h10a6 6 0 0 1 5-4V7a2 2 0 0 0-2-2h-1M6 9h3" />
  </Svg>
);
export default SvgMoped;
