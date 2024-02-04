import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHeartSearch = ({
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
    <Path d="m12 20-.975-.966L4.5 12.572A5 5 0 1 1 12 6.006a5 5 0 0 1 8.37 5.428" />
    <Path d="M15 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M20.2 20.2 22 22" />
  </Svg>
);
export default SvgHeartSearch;
