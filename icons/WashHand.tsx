import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWashHand = ({
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
    <Path d="M3.486 8.965Q3.738 8.996 4 9c.79.009 1.539-.178 2-.5.426-.296.777-.5 1.5-.5h1M16 8l.615.034c.552.067 1.046.23 1.385.466.461.322 1.21.509 2 .5q.256-.002.503-.034M14 10.5l.586.578a1.516 1.516 0 0 0 2 0c.476-.433.55-1.112.176-1.622L15 7c-.37-.506-1.331-1-2-1H9.883a1 1 0 0 0-.992.876l-.499 3.986A3.86 3.86 0 0 0 11 15a2.28 2.28 0 0 0 3-2.162z" />
    <Path d="m3 6 1.721 10.329A2 2 0 0 0 6.694 18h10.612a2 2 0 0 0 1.973-1.671L21 6" />
  </Svg>
);
export default SvgWashHand;
