import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgEditCircle = ({
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
    className="icon icon-tabler icon-tabler-edit-circle"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m12 15 8.385-8.415a2.1 2.1 0 0 0-2.97-2.97L9 12v3zM16 5l3 3" />
    <Path d="M9 7.07A7 7 0 0 0 10 21a7 7 0 0 0 6.929-6" />
  </Svg>
);
export default SvgEditCircle;
