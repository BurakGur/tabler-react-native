import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNotificationOff = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M6.154 6.187A2 2 0 0 0 5 8v9a2 2 0 0 0 2 2h9a2 2 0 0 0 1.811-1.151M14 7a3 3 0 1 0 6 0 3 3 0 1 0-6 0M3 3l18 18" />
  </Svg>
);
export default SvgNotificationOff;
