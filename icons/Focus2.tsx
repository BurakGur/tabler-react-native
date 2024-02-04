import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFocus2 = ({
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
    <Circle cx={12} cy={12} r={0.5} fill="currentColor" />
    <Path d="M5 12a7 7 0 1 0 14 0 7 7 0 1 0-14 0M12 3v2M3 12h2M12 19v2M19 12h2" />
  </Svg>
);
export default SvgFocus2;
