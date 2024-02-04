import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPhysotherapist = ({
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
    <Path d="m9 15-1-3 4-2 4 1h3.5M3 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 6a1 1 0 1 0 2 0 1 1 0 1 0-2 0M12 17v-7M8 20h7l1-4 4-2M18 20h3" />
  </Svg>
);
export default SvgPhysotherapist;
