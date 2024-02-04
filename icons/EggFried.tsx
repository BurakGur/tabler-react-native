import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEggFried = ({
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
    <Path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <Path d="M14 3a5 5 0 0 1 4.872 6.13 3 3 0 0 1 .178 5.681 3 3 0 1 1-4.684 3.626 5 5 0 1 1-8.662-5 5 5 0 1 1 4.645-8.856A4.98 4.98 0 0 1 14 2.996z" />
  </Svg>
);
export default SvgEggFried;
