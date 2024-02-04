import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgJetpack = ({
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
    <Path d="M10 6a3 3 0 1 0-6 0v7h6zM14 13h6V6a3 3 0 0 0-6 0zM5 16q0 3.5 2 5 2-1.5 2-5M15 16q0 3.5 2 5 2-1.5 2-5M10 8h4M10 11h4" />
  </Svg>
);
export default SvgJetpack;
