import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTriangleOff = ({
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
    <Path d="m7.825 7.83-5.568 9.295a1.914 1.914 0 0 0 1.636 2.871H20m1.998-1.99a1.9 1.9 0 0 0-.255-.88L13.637 3.59a1.914 1.914 0 0 0-3.274 0L9.335 5.308M3 3l18 18" />
  </Svg>
);
export default SvgTriangleOff;
