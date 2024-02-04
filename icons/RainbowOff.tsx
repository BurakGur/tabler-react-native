import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRainbowOff = ({
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
    <Path d="M22 17c0-5.523-4.477-10-10-10q-.462 0-.914.041m-3.208.845A10 10 0 0 0 2 17M11.088 11.069A6 6 0 0 0 6 17M14 17a2 2 0 1 0-4 0M3 3l18 18" />
  </Svg>
);
export default SvgRainbowOff;
