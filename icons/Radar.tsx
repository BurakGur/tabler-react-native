import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRadar = ({
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
    className="icon icon-tabler icon-tabler-radar"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M21 12h-8a1 1 0 1 0-1 1v8a9 9 0 0 0 9-9" />
    <Path d="M16 9a5 5 0 1 0-7 7" />
    <Path d="M20.486 9A9 9 0 1 0 9.004 20.495" />
  </Svg>
);
export default SvgRadar;
