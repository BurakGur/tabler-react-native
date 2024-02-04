import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandCucumber = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-brand-cucumber"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M20 10.99c-.01 5.52-4.48 10-10 10.01v-2.26l-.01-.01c-4.28-1.11-6.86-5.47-5.76-9.75a8 8 0 0 1 9.74-5.76C17.5 4.13 20 7.35 20 11zM10.5 8 10 7M13.5 14l.5 1M9 12.5 8 13M11 14l-.5 1M13 8l.5-1M16 12.5l-1-.5M9 10l-1-.5" />
  </Svg>
);
export default SvgBrandCucumber;
