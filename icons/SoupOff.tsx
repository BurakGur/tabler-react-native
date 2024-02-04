import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSoupOff = ({
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
    className="icon icon-tabler icon-tabler-soup-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 19h16M15 11h6c0 1.691-.525 3.26-1.42 4.552m-2.034 2.032A7.96 7.96 0 0 1 13 19h-2a8 8 0 0 1-8-8h8M12 5v3M15 5v3M3 3l18 18" />
  </Svg>
);
export default SvgSoupOff;
