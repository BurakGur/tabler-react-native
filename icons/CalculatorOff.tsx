import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCalculatorOff = ({
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
    <Path d="M19.823 19.824A2 2 0 0 1 18 21H6a2 2 0 0 1-2-2V5c0-.295.064-.575.178-.827M7 3h11a2 2 0 0 1 2 2v11" />
    <Path d="M10 10H9a1 1 0 0 1-1-1V8m3-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-1M8 14v.01M12 14v.01M8 17v.01M12 17v.01M16 17v.01M3 3l18 18" />
  </Svg>
);
export default SvgCalculatorOff;
