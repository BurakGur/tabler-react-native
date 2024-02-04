import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBuildingBridge2 = ({
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
    className="icon icon-tabler icon-tabler-building-bridge-2"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M6 7h12a2 2 0 0 1 2 2v9a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a4 4 0 0 0-8 0v2a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V9a2 2 0 0 1 2-2" />
  </Svg>
);
export default SvgBuildingBridge2;
