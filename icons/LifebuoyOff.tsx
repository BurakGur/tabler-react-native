import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLifebuoyOff = ({
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
    <Path d="M9.171 9.172a4 4 0 0 0 5.65 5.663M16 12a4 4 0 0 0-4-4" />
    <Path d="M5.64 5.632a9 9 0 1 0 12.73 12.725m1.667-2.301A9 9 0 0 0 7.96 3.956M15 15l3.35 3.35M9 15l-3.35 3.35M5.65 5.65 9 9M18.35 5.65 15 9M3 3l18 18" />
  </Svg>
);
export default SvgLifebuoyOff;
