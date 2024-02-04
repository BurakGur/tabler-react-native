import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNut = ({
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
    <Path d="M19 6.84a2.01 2.01 0 0 1 1 1.754v6.555c0 .728-.394 1.4-1.03 1.753l-6 3.844a2 2 0 0 1-1.94 0l-6-3.844A2 2 0 0 1 4 15.15V8.593c0-.728.394-1.399 1.03-1.753l6-3.582a2.05 2.05 0 0 1 2 0l6 3.582z" />
    <Path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
  </Svg>
);
export default SvgNut;
