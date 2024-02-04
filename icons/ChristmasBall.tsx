import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChristmasBall = ({
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
    <Path d="M4 13a8 8 0 1 0 16 0 8 8 0 1 0-16 0" />
    <Path d="m11 5 1-2 1 2M4.512 10.161Q8.256 8.504 12 11q3.941 2.628 7.882.653M4.315 15.252Q8.157 13.438 12 16q3.439 2.292 6.878 1.081" />
  </Svg>
);
export default SvgChristmasBall;
