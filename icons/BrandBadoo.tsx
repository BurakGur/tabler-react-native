import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandBadoo = ({
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
    <Path d="M22 9.43C22 15.268 17.523 20 12 20S2 15.338 2 9.5c0-2.667 1.83-5.01 4.322-5.429C8.814 3.653 11.222 5.463 12 8c.768-2.54 3.177-4.354 5.668-3.931C20.163 4.486 22 6.759 22 9.429z" />
    <Path d="M7.5 10c0 2.761 2.015 5 4.5 5s4.5-2.239 4.5-5" />
  </Svg>
);
export default SvgBrandBadoo;
