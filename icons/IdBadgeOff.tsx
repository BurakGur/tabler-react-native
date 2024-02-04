import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgIdBadgeOff = ({
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
    className="icon icon-tabler icon-tabler-id-badge-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M7.141 3.125A3 3 0 0 1 8 3h8a3 3 0 0 1 3 3v9m-.13 3.874A3 3 0 0 1 16 21H8a3 3 0 0 1-3-3V6a3 3 0 0 1 .128-.869" />
    <Path d="M11.179 11.176a2 2 0 1 0 2.635 2.667M10 6h4M9 18h6M3 3l18 18" />
  </Svg>
);
export default SvgIdBadgeOff;
