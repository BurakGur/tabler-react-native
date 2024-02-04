import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGizmo = ({
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
    <Path d="m20 19-8-5.5L4 19M12 4v9.5M11 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <Path d="M3 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0M19 19a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </Svg>
);
export default SvgGizmo;
