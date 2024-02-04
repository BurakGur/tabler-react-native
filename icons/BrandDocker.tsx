import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandDocker = ({
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
    <Path d="M22 12.54c-1.804-.345-2.701-1.08-3.523-2.94-.487.696-1.102 1.568-.92 2.4.028.238-.32 1-.557 1H3c0 5.208 3.164 7 6.196 7 4.124.022 7.828-1.376 9.854-5 1.146-.101 2.296-1.505 2.95-2.46" />
    <Path d="M5 10h3v3H5zM8 10h3v3H8zM11 10h3v3h-3zM8 7h3v3H8zM11 7h3v3h-3zM11 4h3v3h-3zM4.571 18c1.5 0 2.047-.074 2.958-.78M10 16v.01" />
  </Svg>
);
export default SvgBrandDocker;
