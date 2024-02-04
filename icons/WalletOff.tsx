import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWalletOff = ({
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
    <Path d="M17 8V5a1 1 0 0 0-1-1H8m-3.413.584A2 2 0 0 0 6 8h2m4 0h6a1 1 0 0 1 1 1v3" />
    <Path d="M19 19a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V6" />
    <Path d="M16 12h4v4m-4 0a2 2 0 0 1-2-2M3 3l18 18" />
  </Svg>
);
export default SvgWalletOff;
