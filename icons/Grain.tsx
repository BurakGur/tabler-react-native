import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGrain = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3.5 9.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8.5 4.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8.5 14.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3.5 19.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M13.5 9.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M18.5 4.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M13.5 19.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M18.5 14.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </Svg>
);
export default SvgGrain;
