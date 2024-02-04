import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSquareRoot2 = ({
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
    <Path d="M13 12h1c1 0 1 1 2.016 3.527C17 18 17 19 18 19h1" />
    <Path d="M12 19c1.5 0 3-2 4-3.5s2.5-3.5 4-3.5M3 12h1l3 8 3-16h10" />
  </Svg>
);
export default SvgSquareRoot2;
