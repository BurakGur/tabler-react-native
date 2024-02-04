import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkateboarding = ({
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
    <Path d="M16 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5.5 15H9l.75-1.5M14 19v-5l-2.5-3L14 7" />
    <Path d="m8 8 3-1h4l1 3h3" />
    <Path fill="currentColor" d="M17.5 21a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
    <Path d="M3 18c0 .552.895 1 2 1h14c1.105 0 2-.448 2-1" />
    <Path fill="currentColor" d="M6.5 21a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
  </Svg>
);
export default SvgSkateboarding;
