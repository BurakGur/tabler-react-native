import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBuildingWindTurbine = ({
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
    <Path d="M10 11a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <Path d="M10 11V8.427q0-.27.04-.536l.716-4.828C10.82 2.466 11.353 2 12 2s1.18.466 1.244 1.063l.716 4.828q.04.267.04.536V11" />
    <Path d="m13.01 9.28 2.235 1.276q.234.135.446.3l3.836 2.911c.487.352.624 1.04.3 1.596-.325.556-1 .782-1.548.541l-4.555-1.68a4 4 0 0 1-.486-.231l-2.235-1.277" />
    <Path d="m13 12.716-2.236 1.277a4 4 0 0 1-.485.23l-4.555 1.681c-.551.241-1.223.015-1.548-.54-.324-.557-.187-1.245.3-1.597l3.836-2.91a3.4 3.4 0 0 1 .446-.3l2.235-1.277M7 21h10M10 21l1-7M13 14l1 7" />
  </Svg>
);
export default SvgBuildingWindTurbine;
