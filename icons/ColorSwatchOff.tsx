import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgColorSwatchOff = ({
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
    <Path d="M13 13v4a4 4 0 0 0 6.832 2.825M21 17V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4" />
    <Path d="m13 7.35-2-2a2 2 0 0 0-2.11-.461M6.76 6.763 5.344 8.178a2 2 0 0 0 0 2.828l9 9" />
    <Path d="M7.3 13H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h12M17 17v.01M3 3l18 18" />
  </Svg>
);
export default SvgColorSwatchOff;
