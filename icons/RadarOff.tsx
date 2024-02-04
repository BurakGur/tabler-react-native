import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRadarOff = ({
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
    className="icon icon-tabler icon-tabler-radar-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M11.291 11.295A1 1 0 0 0 12 13v8c2.488 0 4.74-1.01 6.37-2.642m1.675-2.319A8.96 8.96 0 0 0 21 12h-5M16 9a5 5 0 0 0-5.063-1.88M8.471 8.467a5 5 0 0 0 .53 7.535" />
    <Path d="M20.486 9A9 9 0 0 0 7.961 3.968M5.644 5.643a9 9 0 0 0 3.36 14.852M3 3l18 18" />
  </Svg>
);
export default SvgRadarOff;
