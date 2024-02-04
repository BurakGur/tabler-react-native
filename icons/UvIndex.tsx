import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUvIndex = ({
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
    <Path d="M3 12h1m16 0h1M5.6 5.6l.7.7m12.1-.7-.7.7M8 12a4 4 0 1 1 8 0M12 4V3M13 16l2 5h1l2-5M6 16v3a2 2 0 1 0 4 0v-3" />
  </Svg>
);
export default SvgUvIndex;
