import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMathXPlusY = ({
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
    className="icon icon-tabler icon-tabler-math-x-plus-y"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m16 9 3 5.063M2 9l6 6M2 15l6-6M22 9l-4.8 9M10 12h4M12 10v4" />
  </Svg>
);
export default SvgMathXPlusY;
