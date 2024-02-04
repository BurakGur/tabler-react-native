import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgZodiacCancer = ({
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
    <Path d="M3 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0M15 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <Path d="M3 12a10 6.5 0 0 1 14-6.5M21 12a10 6.5 0 0 1-14 6.5" />
  </Svg>
);
export default SvgZodiacCancer;
