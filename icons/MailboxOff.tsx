import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMailboxOff = ({
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
    <Path d="M10 21v-6.5a3.5 3.5 0 0 0-7 0V21h18m0-4v-2a4 4 0 0 0-4-4h-2m-4 0H6.5M12 8V3h4l2 2-2 2h-4M6 15h1M3 3l18 18" />
  </Svg>
);
export default SvgMailboxOff;
