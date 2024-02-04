import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMilitaryAward = ({
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
    <Path d="M8 13a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
    <Path d="M8.5 10.5 7.5 8H2l2.48 5.788A2 2 0 0 0 6.32 15H8.5M15.5 10.5l1-2.5H22l-2.48 5.788A2 2 0 0 1 17.68 15H15.5" />
  </Svg>
);
export default SvgMilitaryAward;
