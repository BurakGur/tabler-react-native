import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMathXMinusY = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-math-x-minus-y"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m2 9 6 6M2 15l6-6M16 9l3 5.063M22 9l-4.8 9M10 12h4" />
  </Svg>
);
export default SvgMathXMinusY;
