import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLayersUnion = ({
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
    <Path d="M16 16v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2z" />
  </Svg>
);
export default SvgLayersUnion;
