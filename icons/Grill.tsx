import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGrill = ({
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
    <Path d="M19 8H5a6 6 0 0 0 6 6h2a6 6 0 0 0 6-5.775zM17 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 14l1 2M9 14l-3 6M15 18H7M15 5V4M12 5V4M9 5V4" />
  </Svg>
);
export default SvgGrill;
