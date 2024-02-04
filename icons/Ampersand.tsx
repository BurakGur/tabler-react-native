import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAmpersand = ({
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
    <Path d="M19 20 8.597 9.028a2.95 2.95 0 0 1 0-4.165 2.94 2.94 0 0 1 4.161 0 2.95 2.95 0 0 1 0 4.165l-4.68 4.687a3.685 3.685 0 0 0 0 5.207 3.675 3.675 0 0 0 5.2 0L19 13" />
  </Svg>
);
export default SvgAmpersand;
