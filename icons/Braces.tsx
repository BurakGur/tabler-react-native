import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBraces = ({
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
    <Path d="M7 4a2 2 0 0 0-2 2v3a2 3 0 0 1-2 3 2 3 0 0 1 2 3v3a2 2 0 0 0 2 2M17 4a2 2 0 0 1 2 2v3a2 3 0 0 0 2 3 2 3 0 0 0-2 3v3a2 2 0 0 1-2 2" />
  </Svg>
);
export default SvgBraces;
