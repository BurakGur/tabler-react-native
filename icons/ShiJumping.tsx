import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShiJumping = ({
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
    <Path d="M11 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0M17 17.5 12 13V7l5 4M7 17.5l5-4.5" />
    <Path d="m15.103 21.58 6.762-14.502a2 2 0 0 0-.968-2.657M8.897 21.58 2.135 7.077a2 2 0 0 1 .968-2.657M7 11l5-4" />
  </Svg>
);
export default SvgShiJumping;
