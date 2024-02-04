import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDeviceNintendo = ({
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
    <Path d="M10 20V4H7a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4zM14 20V4h3a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4z" />
    <Circle cx={17.5} cy={15.5} r={1} fill="currentColor" />
    <Circle cx={6.5} cy={8.5} r={1} fill="currentColor" />
  </Svg>
);
export default SvgDeviceNintendo;
