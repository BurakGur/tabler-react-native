import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMountainOff = ({
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
    <Path d="M18.281 14.26 14.08 5.388a2.3 2.3 0 0 0-4.158 0l-.165.349M8.468 8.456 3 20h17" />
    <Path d="m7.5 11 2 2.5 2-2M3 3l18 18" />
  </Svg>
);
export default SvgMountainOff;
