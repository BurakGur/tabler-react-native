import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBalloonOff = ({
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
    <Path d="M14 8a2 2 0 0 0-2-2" />
    <Path d="M7.762 3.753A6 6 0 0 1 18 8c0 1.847-.37 3.564-1.007 4.993m-1.59 2.42C14.436 16.413 13.263 17 12 17c-3.314 0-6-4.03-6-9 0-.593.086-1.166.246-1.707M12 17v1a2 2 0 0 1-2 2H7a2 2 0 0 0-2 2M3 3l18 18" />
  </Svg>
);
export default SvgBalloonOff;
