import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTransitionTop = ({
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
    <Path d="M21 6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3M6 21h12a3 3 0 0 0 0-6H6a3 3 0 0 0 0 6M12 15V7M9 10l3-3 3 3" />
  </Svg>
);
export default SvgTransitionTop;
