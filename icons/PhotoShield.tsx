import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPhotoShield = ({
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
    <Path d="M15 8h.01M11.5 20H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v4" />
    <Path d="m4 15 4-4c.928-.893 2.072-.893 3 0l1.5 1.5M22 16c0 4-2.5 6-3.5 6S15 20 15 16c1 0 2.5-.5 3.5-1.5 1 1 2.5 1.5 3.5 1.5" />
  </Svg>
);
export default SvgPhotoShield;
