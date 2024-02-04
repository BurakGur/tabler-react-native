import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeartOff = ({
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
    <Path d="m3 3 18 18M19.5 12.572 18 14m-2 2-4 4-7.5-7.428a5 5 0 0 1-1.288-5.068A4.98 4.98 0 0 1 5 5m3-1c1.56 0 3.05.727 4 2a5 5 0 1 1 7.5 6.572" />
  </Svg>
);
export default SvgHeartOff;
