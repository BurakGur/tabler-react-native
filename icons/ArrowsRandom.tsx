import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowsRandom = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M20 21h-4v-4M16 21l5-5M6.5 9.504l-3.5-2L5 4M3 7.504l6.83-1.87M4 16l4-1 1 4M8 15l-3.5 6M21 5l-.5 4-4-.5M20.5 9 16 3.5" />
  </Svg>
);
export default SvgArrowsRandom;
