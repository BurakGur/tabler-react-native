import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGlassChampagne = ({
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
    <Path d="M9 21h6M12 16v5M8 5a4 2 0 1 0 8 0 4 2 0 1 0-8 0" />
    <Path d="M8 5c0 6.075 1.79 11 4 11s4-4.925 4-11" />
  </Svg>
);
export default SvgGlassChampagne;
