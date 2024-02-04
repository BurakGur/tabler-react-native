import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlaneOff = ({
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
    <Path d="M9.788 5.758 9 3h3l4 7h4a2 2 0 1 1 0 4h-2m-2.718 1.256L12 21H9l2-7H7l-2 2H2l2-4-2-4h3l2 2h3M3 3l18 18" />
  </Svg>
);
export default SvgPlaneOff;
