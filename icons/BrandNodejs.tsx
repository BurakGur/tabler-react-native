import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandNodejs = ({
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
    <Path d="M9 9v8.044a2 2 0 0 1-2.996 1.734l-1.568-.9A3 3 0 0 1 3 15.317V8.682a3 3 0 0 1 1.436-2.56l6-3.667a3 3 0 0 1 3.128 0l6 3.667A3 3 0 0 1 21 8.683v6.634a3 3 0 0 1-1.436 2.56l-6 3.667a3 3 0 0 1-3.128 0" />
    <Path d="M17 9h-3.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3H12" />
  </Svg>
);
export default SvgBrandNodejs;
