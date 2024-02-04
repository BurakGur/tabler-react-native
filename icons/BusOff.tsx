import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBusOff = ({
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
    className="icon icon-tabler icon-tabler-bus-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M16.18 16.172a2 2 0 0 0 2.652 2.648" />
    <Path d="M4 17H2V6a1 1 0 0 1 1-1h2m4 0h8c2.761 0 5 3.134 5 7v5h-1m-5 0H8" />
    <Path d="m16 5 1.5 7H22M2 10h8m4 0h3M7 7v3M12 5v3M3 3l18 18" />
  </Svg>
);
export default SvgBusOff;
