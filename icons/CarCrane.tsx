import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCarCrane = ({
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
    <Path d="M3 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <Path d="M7 18h8m4 0h2v-6a5 5 0 0 0-5-5h-1l1.5 5H21M12 18V7h3M3 17v-5h9" />
    <Path d="M4 12V6l18-3v2" />
    <Path d="M8 12V8L4 6" />
  </Svg>
);
export default SvgCarCrane;
