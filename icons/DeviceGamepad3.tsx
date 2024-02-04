import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgDeviceGamepad3 = ({
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
    className="icon icon-tabler icon-tabler-device-gamepad-3"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M10 12 7 9H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h2zM14 12l3-3h2a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-2zM12 14l-3 3v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2zM12 10 9 7V5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2z" />
  </Svg>
);
export default SvgDeviceGamepad3;
