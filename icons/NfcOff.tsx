import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNfcOff = ({
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
    <Path d="M11 20a3 3 0 0 1-3-3V8M13 4a3 3 0 0 1 3 3v5m0 4v2l-5-5" />
    <Path d="M8 4h9a3 3 0 0 1 3 3v9m-.873 3.116A3 3 0 0 1 17 20H7a3 3 0 0 1-3-3V7c0-.83.337-1.582.882-2.125M3 3l18 18" />
  </Svg>
);
export default SvgNfcOff;
