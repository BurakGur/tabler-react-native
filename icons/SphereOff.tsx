import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSphereOff = ({
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
    className="icon icon-tabler icon-tabler-sphere-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 12c0 1.657 4.03 3 9 3 .987 0 1.936-.053 2.825-.15m3.357-.67C19.917 13.633 21 12.86 21 12" />
    <Path d="M20.051 16.027A9 9 0 0 0 7.968 3.952m-2.34 1.692a9 9 0 0 0 12.74 12.716M3 3l18 18" />
  </Svg>
);
export default SvgSphereOff;
