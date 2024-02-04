import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBuildingCircus = ({
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
    <Path d="M4 11h16M12 6.5c0 1-5 4.5-8 4.5M12 6.5c0 1 5 4.5 8 4.5M6 11q-.5 8-2 10h4c1 0 4-4 4-9v-1M18 11q.5 8 2 10h-4c-1 0-4-4-4-9v-1" />
    <Path d="M12 7V3l2 1h-2" />
  </Svg>
);
export default SvgBuildingCircus;
