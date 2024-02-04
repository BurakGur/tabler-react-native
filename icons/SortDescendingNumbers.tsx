import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSortDescendingNumbers = ({
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
    className="icon icon-tabler icon-tabler-sort-descending-numbers"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m4 15 3 3 3-3M7 6v12M17 14a2 2 0 0 1 2 2v3a2 2 0 1 1-4 0v-3a2 2 0 0 1 2-2M15 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <Path d="M19 5v3a2 2 0 0 1-2 2h-1.5" />
  </Svg>
);
export default SvgSortDescendingNumbers;
