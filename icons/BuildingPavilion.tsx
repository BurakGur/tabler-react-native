import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBuildingPavilion = ({
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
    className="icon icon-tabler icon-tabler-building-pavilion"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 21h7v-3a2 2 0 0 1 4 0v3h7M6 21v-9M18 21v-9M6 12h12a3 3 0 0 0 3-3 9 8 0 0 1-9-6 9 8 0 0 1-9 6 3 3 0 0 0 3 3" />
  </Svg>
);
export default SvgBuildingPavilion;
