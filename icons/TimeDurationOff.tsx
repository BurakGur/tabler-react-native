import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTimeDurationOff = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 12v.01M7.5 19.8v.01M4.2 16.5v.01M4.2 7.5v.01M12 21a9 9 0 0 0 6.362-2.634m1.685-2.336A9 9 0 0 0 12 3M3 3l18 18" />
  </Svg>
);
export default SvgTimeDurationOff;
