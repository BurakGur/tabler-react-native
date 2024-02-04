import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgToml = ({
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
    <Path d="M1.499 8h3M2.999 8v8M8.5 8A1.5 1.5 0 0 1 10 9.5v5a1.5 1.5 0 0 1-3 0v-5A1.5 1.5 0 0 1 8.5 8M13 16V8l2 5 2-5v8M20 8v8h2.5" />
  </Svg>
);
export default SvgToml;
