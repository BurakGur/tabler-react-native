import * as React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDice4 = ({
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
    <Path d="M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <Circle cx={8.5} cy={8.5} r={0.5} fill="currentColor" />
    <Circle cx={15.5} cy={8.5} r={0.5} fill="currentColor" />
    <Circle cx={15.5} cy={15.5} r={0.5} fill="currentColor" />
    <Circle cx={8.5} cy={15.5} r={0.5} fill="currentColor" />
  </Svg>
);
export default SvgDice4;
