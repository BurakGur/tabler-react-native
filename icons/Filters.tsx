import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFilters = ({
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
    className="icon icon-tabler icon-tabler-filters"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M7 8a5 5 0 1 0 10 0A5 5 0 1 0 7 8" />
    <Path d="M8 11a5 5 0 1 0 3.998 1.997" />
    <Path d="M12.002 19.003A5 5 0 1 0 16 11" />
  </Svg>
);
export default SvgFilters;
