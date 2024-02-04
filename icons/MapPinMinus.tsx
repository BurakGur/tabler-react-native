import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMapPinMinus = ({
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
    <Path d="M9 11a3 3 0 1 0 6 0 3 3 0 0 0-6 0" />
    <Path d="M12.758 21.337a2 2 0 0 1-2.171-.437l-4.244-4.243a8 8 0 1 1 12.585-1.652M16 19h6" />
  </Svg>
);
export default SvgMapPinMinus;
