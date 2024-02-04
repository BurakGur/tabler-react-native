import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgError404Off = ({
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
    <Path d="M3 7v4a1 1 0 0 0 1 1h3M7 7v10M10 10v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2m0-4V8a1 1 0 0 0-1-1h-2M17 7v4a1 1 0 0 0 1 1h3M21 7v10M3 3l18 18" />
  </Svg>
);
export default SvgError404Off;
