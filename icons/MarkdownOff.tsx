import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMarkdownOff = ({
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
    <Path d="M9 5h10a2 2 0 0 1 2 2v10M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 1.85-2" />
    <Path d="M7 15V9l2 2 1-1m1 1v4M17.5 13.5l.5-.5m-2-1V9M3 3l18 18" />
  </Svg>
);
export default SvgMarkdownOff;
