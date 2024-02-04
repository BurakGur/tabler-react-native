import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFlipFlops = ({
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
    className="icon icon-tabler icon-tabler-flip-flops"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M18 4c2.21 0 4 1.682 4 3.758q.002.117-.008.234l-.6 9.014c-.11 1.683-1.596 3-3.392 3s-3.28-1.311-3.392-3l-.6-9.014c-.138-2.071 1.538-3.855 3.743-3.985a4 4 0 0 1 .25-.007z" />
    <Path d="M14.5 14Q16 9 18 9t3.5 5M18 16v1M6 4c2.21 0 4 1.682 4 3.758q.002.117-.008.234l-.6 9.014c-.11 1.683-1.596 3-3.392 3s-3.28-1.311-3.392-3l-.6-9.014C1.87 5.921 3.546 4.137 5.75 4.007 5.834 4.007 5.917 4 6 4" />
    <Path d="M2.5 14Q4 9 6 9t3.5 5M6 16v1" />
  </Svg>
);
export default SvgFlipFlops;
