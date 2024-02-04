import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStackMiddle = ({
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
    className="icon icon-tabler icon-tabler-stack-middle"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m16 10 4-2-8-4-8 4 4 2" />
    <Path fill="currentColor" d="m12 12-4-2-4 2 8 4 8-4-4-2z" />
    <Path d="m8 14-4 2 8 4 8-4-4-2" />
  </Svg>
);
export default SvgStackMiddle;
