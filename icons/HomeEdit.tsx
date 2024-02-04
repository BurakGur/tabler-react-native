import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeEdit = ({
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
    <Path d="M9 21v-6a2 2 0 0 1 2-2h2c.645 0 1.218.305 1.584.78" />
    <Path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h4M18.42 15.61a2.1 2.1 0 0 1 2.97 2.97L18 22h-3v-3z" />
  </Svg>
);
export default SvgHomeEdit;
