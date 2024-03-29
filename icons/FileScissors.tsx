import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileScissors = ({
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
    <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <Path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2" />
    <Path d="M14 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9 17l6-6M15 17l-6-6" />
  </Svg>
);
export default SvgFileScissors;
