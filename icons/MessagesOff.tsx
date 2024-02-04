import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMessagesOff = ({
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
    <Path d="m3 3 18 18M11 11a1 1 0 0 1-1-1m0-3.968V4a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v10l-3-3h-3M14 15v2a1 1 0 0 1-1 1H6l-3 3V11a1 1 0 0 1 1-1h2" />
  </Svg>
);
export default SvgMessagesOff;
