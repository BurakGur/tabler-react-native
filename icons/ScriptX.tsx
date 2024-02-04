import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgScriptX = ({
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
    <Path d="M14 20H6a3 3 0 0 1 0-6h11a3 3 0 0 0-3 3m7-3V6a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v8M17 17l4 4m0-4-4 4" />
  </Svg>
);
export default SvgScriptX;
