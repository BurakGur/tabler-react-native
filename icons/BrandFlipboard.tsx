import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandFlipboard = ({
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
    <Path d="M3.973 3h16.054c.537 0 .973.436.973.973v4.052a.973.973 0 0 1-.973.973h-5.025v4.831c0 .648-.525 1.173-1.173 1.173H9v5.025a.973.973 0 0 1-.974.973H3.973A.973.973 0 0 1 3 20.027V3.973C3 3.436 3.436 3 3.973 3" />
  </Svg>
);
export default SvgBrandFlipboard;
