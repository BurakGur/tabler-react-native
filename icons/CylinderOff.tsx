import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCylinderOff = ({
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
    <Path d="M5.23 5.233C5.08 5.478 5 5.735 5 6c0 1.131 1.461 2.117 3.62 2.628m4.357.343C16.381 8.767 19 7.515 19 6c0-1.657-3.134-3-7-3-1.645 0-3.158.243-4.353.65" />
    <Path d="M5 6v12c0 1.657 3.134 3 7 3 3.245 0 5.974-.946 6.767-2.23M19 15V6M3 3l18 18" />
  </Svg>
);
export default SvgCylinderOff;
