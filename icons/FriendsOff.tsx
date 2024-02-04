import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFriendsOff = ({
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
    <Path d="M5 5a2 2 0 0 0 2 2m2-2a2 2 0 0 0-2-2M5 22v-5l-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4l-1 1v5M15 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M15 22v-4h-2l1.254-3.763m1.036-2.942A1 1 0 0 1 16 11h2a1 1 0 0 1 1 1l1.503 4.508M19 19v3M3 3l18 18" />
  </Svg>
);
export default SvgFriendsOff;
