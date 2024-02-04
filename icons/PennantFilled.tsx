import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPennantFilled = ({
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
    <Path
      fill="currentColor"
      stroke="none"
      d="M10 2a1 1 0 0 1 .993.883L11 3v.35l8.406 3.736c.752.335.79 1.365.113 1.77l-.113.058L11 12.649V20h1a1 1 0 0 1 .117 1.993L12 22H8a1 1 0 0 1-.117-1.993L8 20h1V3a1 1 0 0 1 1-1"
    />
  </Svg>
);
export default SvgPennantFilled;
