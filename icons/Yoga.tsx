import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgYoga = ({
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
    className="icon icon-tabler icon-tabler-yoga"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M4 20h4l1.5-3M17 20l-1-5h-5l1-7" />
    <Path d="m4 10 4-1 4-1 4 1.5 4 1.5" />
  </Svg>
);
export default SvgYoga;
