import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRewindForward5 = ({
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
    <Path d="M9 18A6 6 0 1 1 9 6h11M13 20h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2v-3h3" />
    <Path d="m17 9 3-3-3-3" />
  </Svg>
);
export default SvgRewindForward5;
