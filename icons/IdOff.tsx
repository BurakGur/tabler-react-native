import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgIdOff = ({
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
    <Path d="M8 4h10a3 3 0 0 1 3 3v10m-1.437 2.561c-.455.279-.99.439-1.563.439H6a3 3 0 0 1-3-3V7c0-1.083.573-2.031 1.433-2.559" />
    <Path d="M8.175 8.178a2 2 0 1 0 2.646 2.65M15 8h2M16 12h1M7 16h9M3 3l18 18" />
  </Svg>
);
export default SvgIdOff;
