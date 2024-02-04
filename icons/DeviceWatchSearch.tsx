import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDeviceWatchSearch = ({
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
    <Path d="M11 18H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M20.2 20.2 22 22M9 18v3h3M9 6V3h6v3" />
  </Svg>
);
export default SvgDeviceWatchSearch;
