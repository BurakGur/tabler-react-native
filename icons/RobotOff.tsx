import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRobotOff = ({
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
    <Path d="M8 4h8a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2m-4 0H8a2 2 0 0 1-2-2V6M12 2v2M9 12v9M15 15v6M5 16l4-2M9 18h6M14 8v.01M3 3l18 18" />
  </Svg>
);
export default SvgRobotOff;
