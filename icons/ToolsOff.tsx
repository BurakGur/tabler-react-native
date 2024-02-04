import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgToolsOff = ({
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
    className="icon icon-tabler icon-tabler-tools-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m16 12 4-4a2.828 2.828 0 1 0-4-4l-4 4m-2 2-7 7v4h4l7-7M14.5 5.5l4 4" />
    <Path d="M12 8 7 3M5 5 3 7l5 5M7 8 5.5 9.5M16 12l5 5m-2 2-2 2-5-5M16 17l-1.5 1.5M3 3l18 18" />
  </Svg>
);
export default SvgToolsOff;
