import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLollipop = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-lollipop"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M7 10a7 7 0 1 0 14 0 7 7 0 1 0-14 0" />
    <Path d="M21 10a3.5 3.5 0 0 0-7 0M14 10a3.5 3.5 0 0 1-7 0M14 17a3.5 3.5 0 0 0 0-7M14 3a3.5 3.5 0 0 0 0 7M3 21l6-6" />
  </Svg>
);
export default SvgLollipop;
