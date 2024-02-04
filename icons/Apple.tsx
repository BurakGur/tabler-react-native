import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgApple = ({
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
    <Path d="M5 14a7 7 0 1 0 14 0 7 7 0 1 0-14 0" />
    <Path d="M12 11V5a2 2 0 0 1 2-2h2v1a2 2 0 0 1-2 2h-2" />
    <Path d="M10 10.5q2 1 4 0" />
  </Svg>
);
export default SvgApple;
