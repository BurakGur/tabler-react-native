import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandNordVpn = ({
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
    <Path d="m9.992 15-2.007-3-4.015 8c-2.212-3.061-2.625-7.098-.915-10.463A10.14 10.14 0 0 1 12 4a10.14 10.14 0 0 1 8.945 5.537c1.71 3.365 1.297 7.402-.915 10.463l-4.517-8-1.505 1.5" />
    <Path d="m14.5 15-3-6L9 13.5" />
  </Svg>
);
export default SvgBrandNordVpn;
