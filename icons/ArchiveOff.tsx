import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArchiveOff = ({
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
    <Path d="M8 4h11a2 2 0 1 1 0 4h-7M8 8H5a2 2 0 0 1-.826-3.822" />
    <Path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 1.824-1.18M19 15V8M10 12h2M3 3l18 18" />
  </Svg>
);
export default SvgArchiveOff;
