import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAlarmOff = ({
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
    <Path d="M7.587 7.566a7 7 0 1 0 9.833 9.864m1.35-2.645a7 7 0 0 0-8.536-8.56" />
    <Path d="M12 12v1h1M5.261 5.265 4.25 6M17 4l2.75 2M3 3l18 18" />
  </Svg>
);
export default SvgAlarmOff;
