import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgScooterElectric = ({
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
    <Path d="M16 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M4 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <Path d="M8 17h5a6 6 0 0 1 5-5V7a2 2 0 0 0-2-2h-1M10 4 8 8h3l-2 4" />
  </Svg>
);
export default SvgScooterElectric;
