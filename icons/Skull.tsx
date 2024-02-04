import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSkull = ({
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
    <Path d="M12 4c4.418 0 8 3.358 8 7.5 0 1.901-.755 3.637-2 4.96V19a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-2.54c-1.245-1.322-2-3.058-2-4.96C4 7.358 7.582 4 12 4M10 17v3M14 17v3" />
    <Path d="M8 11a1 1 0 1 0 2 0 1 1 0 1 0-2 0M14 11a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </Svg>
);
export default SvgSkull;
