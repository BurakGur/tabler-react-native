import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileHorizontal = ({
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
    <Path d="M16 5v4a1 1 0 0 0 1 1h4" />
    <Path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7l-5-5H5a2 2 0 0 0-2 2" />
  </Svg>
);
export default SvgFileHorizontal;
