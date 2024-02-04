import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMaskOff = ({
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
    <Path d="M19.42 19.41A2 2 0 0 1 18 20H6a2 2 0 0 1-2-2V6c0-.554.225-1.055.588-1.417M8 4h10a2 2 0 0 1 2 2v10" />
    <Path d="M9.885 9.872a3 3 0 1 0 4.245 4.24m.582-3.396a3 3 0 0 0-1.438-1.433M3 3l18 18" />
  </Svg>
);
export default SvgMaskOff;
