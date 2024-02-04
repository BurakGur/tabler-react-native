import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVariablePlus = ({
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
    <Path d="M5 4C2.5 9 2.5 14 5 20M19 4c1.38 2.76 2 5.52 1.855 8.448M9 9h1c1 0 1 1 2.016 3.527.785 1.972.944 3.008 1.483 3.346" />
    <Path d="M8 16c1.5 0 3-2 4-3.5S14.5 9 16 9M16 19h6M19 16v6" />
  </Svg>
);
export default SvgVariablePlus;
