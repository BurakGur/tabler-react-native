import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandMonday = ({
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
    <Path d="M18 15.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M9.5 7a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264.447-.75.749-1.305.749a1.5 1.5 0 0 1-1.271-2.297l3.906-6.827A1.5 1.5 0 0 1 9.5 7M16.5 7a1.5 1.5 0 0 1 1.339 2.177l-4.034 7.074c-.264.447-.75.749-1.305.749a1.5 1.5 0 0 1-1.271-2.297l3.906-6.827A1.5 1.5 0 0 1 16.5 7" />
  </Svg>
);
export default SvgBrandMonday;
