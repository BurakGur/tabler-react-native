import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDeviceWatchPlus = ({
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
    <Path d="M12 18H9a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3M16 19h6M19 16v6M9 18v3h3.5M9 6V3h6v3" />
  </Svg>
);
export default SvgDeviceWatchPlus;
