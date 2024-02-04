import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRollercoasterOff = ({
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
    className="icon icon-tabler icon-tabler-rollercoaster-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 21a5.55 5.55 0 0 0 5.265-3.795L9 15a8.76 8.76 0 0 1 2.35-3.652m2.403-1.589A8.8 8.8 0 0 1 17.325 9H21M20 9v7m0 4v1M8 21v-3M12 21v-9M16 9.5V12m0 4v5M15 3h5v3h-5zM9.446 5.415 10 5l2 2.5-.285.213M9.447 9.415 8 10.5 6.2 10 6 8l1.139-.854M3 3l18 18" />
  </Svg>
);
export default SvgRollercoasterOff;
