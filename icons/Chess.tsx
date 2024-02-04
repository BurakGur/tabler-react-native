import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgChess = ({
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
    <Path d="M12 3a3 3 0 0 1 3 3c0 1.113-.6 2.482-1.5 3l1.5 7H9l1.5-7C9.6 8.482 9 7.113 9 6a3 3 0 0 1 3-3M8 9h8M6.684 16.772a1 1 0 0 0-.684.949V19a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-1.28a1 1 0 0 0-.684-.948L15 16H9z" />
  </Svg>
);
export default SvgChess;
