import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNumbers = ({
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
    className="icon icon-tabler icon-tabler-numbers"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8 10V3L6 5M6 16a2 2 0 1 1 4 0c0 .591-.601 1.46-1 2l-3 3h4M15 14a2 2 0 1 0 2-2 2 2 0 1 0-2-2M6.5 10h3" />
  </Svg>
);
export default SvgNumbers;
