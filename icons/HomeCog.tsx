import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeCog = ({
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
    <Path d="M9 21v-6a2 2 0 0 1 2-2h1.6" />
    <Path d="m20 11-8-8-9 9h2v7a2 2 0 0 0 2 2h4.159M16 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M18 14.5V16M18 20v1.5M21.032 16.25l-1.299.75M16.27 19l-1.3.75M14.97 16.25l1.3.75M19.733 19l1.3.75" />
  </Svg>
);
export default SvgHomeCog;
