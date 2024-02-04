import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShieldOff = ({
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
    <Path d="M17.67 17.667A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6c.794.036 1.583-.006 2.357-.124m3.128-.926A12 12 0 0 0 12 3a12 12 0 0 0 8.5 3 12 12 0 0 1-1.116 9.376M3 3l18 18" />
  </Svg>
);
export default SvgShieldOff;
