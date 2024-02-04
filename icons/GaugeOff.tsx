import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGaugeOff = ({
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
    <Path d="M20.038 16.052A9 9 0 0 0 7.971 3.95M5.638 5.636a9 9 0 1 0 12.73 12.726" />
    <Path d="M11.283 11.303a1 1 0 0 0 1.419 1.41M14 10l2-2M7 12c0-1.386.564-2.64 1.475-3.546m2.619-1.372Q11.536 7.001 12 7M3 3l18 18" />
  </Svg>
);
export default SvgGaugeOff;
