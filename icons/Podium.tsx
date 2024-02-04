import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPodium = ({
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
    <Path d="M5 8h14l-.621 2.485A2 2 0 0 1 16.439 12H7.561a2 2 0 0 1-1.94-1.515zM7 8V6a3 3 0 0 1 3-3M8 12l1 9M16 12l-1 9M7 21h10" />
  </Svg>
);
export default SvgPodium;
