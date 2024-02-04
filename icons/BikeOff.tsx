import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBikeOff = ({
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
    <Path d="M2 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0M16.437 16.44a3 3 0 0 0 4.123 4.123M22 18a3 3 0 0 0-3-3M12 19v-4l-3-3 1.665-1.332m2.215-1.772L14 8l2 3h3M16 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18" />
  </Svg>
);
export default SvgBikeOff;
