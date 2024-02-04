import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLibraryMinus = ({
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
    <Path d="M7 5.667A2.667 2.667 0 0 1 9.667 3h8.666A2.667 2.667 0 0 1 21 5.667v8.666A2.667 2.667 0 0 1 18.333 17H9.667A2.667 2.667 0 0 1 7 14.333z" />
    <Path d="M4.012 7.26A2 2 0 0 0 3 8.997v10c0 1.1.9 2 2 2h10c.75 0 1.158-.385 1.5-1M11 10h6" />
  </Svg>
);
export default SvgLibraryMinus;
