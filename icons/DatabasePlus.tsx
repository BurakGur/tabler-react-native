import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDatabasePlus = ({
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
    <Path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
    <Path d="M4 6v6c0 1.657 3.582 3 8 3 1.075 0 2.1-.08 3.037-.224M20 12V6" />
    <Path d="M4 12v6c0 1.657 3.582 3 8 3q.249 0 .495-.006M16 19h6M19 16v6" />
  </Svg>
);
export default SvgDatabasePlus;
