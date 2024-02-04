import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTractor = ({
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
    className="icon icon-tabler icon-tabler-tractor"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 15a4 4 0 1 0 8 0 4 4 0 1 0-8 0M7 15v.01M17 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10.5 17H17" />
    <Path d="M20 15.2V11a1 1 0 0 0-1-1h-6l-2-5H5v6.5" />
    <Path d="M18 5h-1a1 1 0 0 0-1 1v4" />
  </Svg>
);
export default SvgTractor;
