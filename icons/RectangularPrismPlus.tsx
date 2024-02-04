import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRectangularPrismPlus = ({
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
    className="icon icon-tabler icon-tabler-rectangular-prism-plus"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M21 12.5V8.991a1.98 1.98 0 0 0-1-1.717l-4-2.008a2.02 2.02 0 0 0-2 0L4 10.273c-.619.355-1 1.01-1 1.718v5.018c0 .709.381 1.363 1 1.717l4 2.008a2.02 2.02 0 0 0 2 0l2.062-1.032M9 21v-7.5M9 13.5 20.5 8M3.5 11 9 13.5M16 19h6M19 16v6" />
  </Svg>
);
export default SvgRectangularPrismPlus;
