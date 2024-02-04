import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTopologyComplex = ({
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
    className="icon icon-tabler icon-tabler-topology-complex"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M20 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M8 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M8 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M20 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7.5 7.5l3 3M6 8v8M18 16V8M8 6h8M16 18H8" />
  </Svg>
);
export default SvgTopologyComplex;
