import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHexagonsOff = ({
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
    <Path d="M4 18v-5l4-2 4 2v5l-4 2zM8 11V8m1.332-2.666L12 4l4 2v5M12 13l.661-.331M15.345 11.328 16 11l4 2v3m-1.334 2.667L16 20l-4-2M3 3l18 18" />
  </Svg>
);
export default SvgHexagonsOff;
