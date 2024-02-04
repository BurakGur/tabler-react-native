import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPerspectiveOff = ({
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
    <Path d="m8.511 4.502 9.63 1.375a1 1 0 0 1 .859.99V15m-.859 3.123-12 1.714A1 1 0 0 1 5 18.847V5.153a1 1 0 0 1 .01-.137M3 3l18 18" />
  </Svg>
);
export default SvgPerspectiveOff;
