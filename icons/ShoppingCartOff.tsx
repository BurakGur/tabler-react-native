import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShoppingCartOff = ({
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
    <Path d="M4 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 17a2 2 0 1 0 2 2" />
    <Path d="M17 17H6V6M9.239 5.231 20 6l-1 7h-2m-4 0H6M3 3l18 18" />
  </Svg>
);
export default SvgShoppingCartOff;
