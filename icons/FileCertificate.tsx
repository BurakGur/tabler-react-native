import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileCertificate = ({
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
    <Path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <Path d="M5 8V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-5" />
    <Path d="M3 14a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <Path d="M4.5 17 3 22l3-1.5L9 22l-1.5-5" />
  </Svg>
);
export default SvgFileCertificate;
