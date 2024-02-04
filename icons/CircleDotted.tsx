import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCircleDotted = ({
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
    <Path d="M7.5 4.21v.01M4.21 7.5v.01M3 12v.01M4.21 16.5v.01M7.5 19.79v.01M12 21v.01M16.5 19.79v.01M19.79 16.5v.01M21 12v.01M19.79 7.5v.01M16.5 4.21v.01M12 3v.01" />
  </Svg>
);
export default SvgCircleDotted;
