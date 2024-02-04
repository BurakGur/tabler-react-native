import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHemispherePlus = ({
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
    <Path d="M3 9a9 3 0 1 0 18 0A9 3 0 1 0 3 9" />
    <Path d="M3 9a9 9 0 0 0 9 9m8.396-5.752A9 9 0 0 0 21 9M16 19h6M19 16v6" />
  </Svg>
);
export default SvgHemispherePlus;
