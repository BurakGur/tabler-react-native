import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHorse = ({
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
    className="icon icon-tabler icon-tabler-horse"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m7 10-.85 8.507A1.357 1.357 0 0 0 7.5 20h.146a2 2 0 0 0 1.857-1.257l.994-2.486A2 2 0 0 1 12.354 15h1.292a2 2 0 0 1 1.857 1.257l.994 2.486A2 2 0 0 0 18.354 20h.146a1.37 1.37 0 0 0 1.364-1.494L19 9h-8c0-3-3-5-6-5l-3 6 2 2zM22 14v-2a3 3 0 0 0-3-3" />
  </Svg>
);
export default SvgHorse;
