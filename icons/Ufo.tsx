import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUfo = ({
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
    <Path d="M16.95 9.01c3.02.739 5.05 2.123 5.05 3.714C22 15.091 17.52 17 12 17S2 15.091 2 12.724C2 11.134 4.04 9.739 7.07 9" />
    <Path d="M7 9c0 1.105 2.239 2 5 2s5-.895 5-2v-.035C17 6.223 14.761 4 12 4S7 6.223 7 8.965zM15 17l2 3M8.5 17 7 20M12 14h.01M7 13h.01M17 13h.01" />
  </Svg>
);
export default SvgUfo;
