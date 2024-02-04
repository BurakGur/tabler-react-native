import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgTimeDuration45 = ({
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
    className="icon icon-tabler icon-tabler-time-duration-45"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M13 15h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-2V9h3M7 9v2a1 1 0 0 0 1 1h1M10 9v6M7.5 4.2v.01M4.2 7.5v.01" />
    <Path d="M3 12a9 9 0 1 0 9-9" />
  </Svg>
);
export default SvgTimeDuration45;
