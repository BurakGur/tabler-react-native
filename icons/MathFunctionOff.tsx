import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMathFunctionOff = ({
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
    <Path d="M14 10h1c.882 0 .986.777 1.694 2.692M13 17c.864 0 1.727-.663 2.495-1.512m1.717-2.302C18.205 11.736 19.602 10 21 10M3 19c0 1.5.5 2 2 2s2-4 3-9c.237-1.186.446-2.317.647-3.35m.727-3.248C9.797 3.91 10.284 3 11 3c1.5 0 2 .5 2 2M5 12h6M3 3l18 18" />
  </Svg>
);
export default SvgMathFunctionOff;
