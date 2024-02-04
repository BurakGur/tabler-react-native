import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHexagonNumber7 = ({
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
    <Path d="M19.02 6.858a2 2 0 0 1 1 1.752v6.555c0 .728-.395 1.4-1.032 1.753l-6.017 3.844a2 2 0 0 1-1.948 0l-6.016-3.844a2 2 0 0 1-1.032-1.752V8.61c0-.728.395-1.4 1.032-1.753l6.017-3.582a2.06 2.06 0 0 1 2 0l6.017 3.583h-.029z" />
    <Path d="M10 8h4l-2 8" />
  </Svg>
);
export default SvgHexagonNumber7;
