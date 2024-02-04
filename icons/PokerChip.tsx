import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPokerChip = ({
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
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <Path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0M12 3v4M12 17v4M3 12h4M17 12h4M18.364 5.636l-2.828 2.828M8.464 15.536l-2.828 2.828M5.636 5.636l2.828 2.828M15.536 15.536l2.828 2.828" />
  </Svg>
);
export default SvgPokerChip;
