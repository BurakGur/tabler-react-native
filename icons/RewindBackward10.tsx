import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRewindBackward10 = ({
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
    <Path d="M7 9 4 6l3-3" />
    <Path d="M15.997 17.918A6.002 6.002 0 0 0 15 6H4M6 14v6M9 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0" />
  </Svg>
);
export default SvgRewindBackward10;
