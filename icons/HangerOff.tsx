import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHangerOff = ({
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
    <Path d="M14 6a2 2 0 1 0-4 0m6.506 6.506 3.461 1.922a2 2 0 0 1 1.029 1.749V17m-2 2h-14a2 2 0 0 1-2-2v-.823a2 2 0 0 1 1.029-1.749l6.673-3.707M3 3l18 18" />
  </Svg>
);
export default SvgHangerOff;
