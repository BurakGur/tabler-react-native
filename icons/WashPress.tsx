import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWashPress = ({
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
    <Path d="M3.486 7.965Q3.738 7.996 4 8c.79.009 1.539-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.539.18 2 .5.461.322 1.21.509 2 .5.79.009 1.539-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.539.18 2 .5.461.322 1.21.509 2 .5.17 0 .339-.014.503-.034" />
    <Path d="m3 5 1.721 10.329A2 2 0 0 0 6.694 17h10.612a2 2 0 0 0 1.973-1.671L21 5M5 20h14" />
  </Svg>
);
export default SvgWashPress;
