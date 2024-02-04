import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCodeCircle2 = ({
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
    className="icon icon-tabler icon-tabler-code-circle-2"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8.5 13.5 7 12l1.5-1.5M15.5 10.5 17 12l-1.5 1.5" />
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M13 9.5 11 15" />
  </Svg>
);
export default SvgCodeCircle2;
