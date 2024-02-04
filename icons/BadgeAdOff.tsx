import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBadgeAdOff = ({
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
    <Path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
    <Path d="M14 14v1h1m2-2v-2a2 2 0 0 0-2-2h-1v1M7 15v-4.5a1.5 1.5 0 0 1 2.077-1.385m.788.762c.087.19.135.4.135.623V15M7 13h3M3 3l18 18" />
  </Svg>
);
export default SvgBadgeAdOff;
