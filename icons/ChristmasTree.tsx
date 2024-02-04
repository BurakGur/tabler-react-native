import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChristmasTree = ({
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
    className="icon icon-tabler icon-tabler-christmas-tree"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m12 3 4 4-2 1 4 4-3 1 4 4H5l4-4-3-1 4-4-2-1zM14 17v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3" />
  </Svg>
);
export default SvgChristmasTree;
