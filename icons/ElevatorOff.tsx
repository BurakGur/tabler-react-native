import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgElevatorOff = ({
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
    className="icon icon-tabler icon-tabler-elevator-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8 4h10a1 1 0 0 1 1 1v10m0 4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5M12 8l2 2" />
    <Path d="m10 14 2 2 2-2M3 3l18 18" />
  </Svg>
);
export default SvgElevatorOff;
