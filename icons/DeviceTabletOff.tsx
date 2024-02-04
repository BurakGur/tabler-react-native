import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDeviceTabletOff = ({
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
    <Path d="M7 3h11a1 1 0 0 1 1 1v11m0 4v1a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5" />
    <Path d="M11 17a1 1 0 1 0 2 0 1 1 0 0 0-2 0M3 3l18 18" />
  </Svg>
);
export default SvgDeviceTabletOff;
