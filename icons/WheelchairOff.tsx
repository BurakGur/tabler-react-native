import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWheelchairOff = ({
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
    <Path d="M3 16a5 5 0 1 0 10 0 5 5 0 1 0-10 0M17.582 17.59a2 2 0 0 0 2.833 2.824M14 14h-1.4M6 6v5M6 8h2m4 0h5M15 8v3M3 3l18 18" />
  </Svg>
);
export default SvgWheelchairOff;
