import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRollercoaster = ({
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
    <Path d="M3 21a5.55 5.55 0 0 0 5.265-3.795L9 15a8.775 8.775 0 0 1 8.325-6H21M20 9v12M8 21v-3M12 21V11M16 9.5V21M15 3h5v3h-5zM6 8l4-3 2 2.5-4 3-1.8-.5z" />
  </Svg>
);
export default SvgRollercoaster;
