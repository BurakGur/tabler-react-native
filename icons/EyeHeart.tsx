import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEyeHeart = ({
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
    <Path d="M13.905 11.39a2 2 0 1 0-2.855 2.37" />
    <Path d="M9.992 17.779Q5.909 16.848 3 12q3.6-6 9-6 4.998 0 8.454 5.14M18 22l3.35-3.284a2.143 2.143 0 0 0 .005-3.071 2.24 2.24 0 0 0-3.129-.006l-.224.22-.223-.22a2.24 2.24 0 0 0-3.128-.006 2.143 2.143 0 0 0-.006 3.071z" />
  </Svg>
);
export default SvgEyeHeart;
