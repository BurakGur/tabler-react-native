import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBluetoothConnected = ({
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
    className="icon icon-tabler icon-tabler-bluetooth-connected"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m7 8 10 8-5 4V4l5 4-10 8M4 12h1M18 12h1" />
  </Svg>
);
export default SvgBluetoothConnected;
