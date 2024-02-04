import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeSearch = ({
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
    <Path d="m21 12-9-9-9 9h2v7a2 2 0 0 0 2 2h4.7" />
    <Path d="M9 21v-6a2 2 0 0 1 2-2h2M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M20.2 20.2 22 22" />
  </Svg>
);
export default SvgHomeSearch;
