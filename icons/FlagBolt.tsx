import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlagBolt = ({
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
    <Path d="M14.673 15.36A4.98 4.98 0 0 1 12 14a5 5 0 0 0-7 0V5a5 5 0 0 1 7 0 5 5 0 0 0 7 0v7M5 21v-7M19 16l-2 3h4l-2 3" />
  </Svg>
);
export default SvgFlagBolt;
