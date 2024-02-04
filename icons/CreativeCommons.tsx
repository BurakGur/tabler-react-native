import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCreativeCommons = ({
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
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <Path d="M10.5 10.5a2.187 2.187 0 0 0-2.914.116 1.93 1.93 0 0 0 0 2.768 2.19 2.19 0 0 0 2.914.116M16.5 10.5a2.187 2.187 0 0 0-2.914.116 1.93 1.93 0 0 0 0 2.768 2.19 2.19 0 0 0 2.914.116" />
  </Svg>
);
export default SvgCreativeCommons;
