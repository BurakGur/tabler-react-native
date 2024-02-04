import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHelmetOff = ({
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
    className="icon icon-tabler icon-tabler-helmet-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8.633 4.654a9 9 0 0 1 11.718 11.7m-1.503 2.486A9 9 0 0 1 17.656 20H6.344a9 9 0 0 1-.185-13.847" />
    <Path d="M20 9h-7m-2.768 1.246q.76 3 3.268 4.254.786.393 1.64.683M3 3l18 18" />
  </Svg>
);
export default SvgHelmetOff;
