import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRewindBackward15 = ({
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
    className="icon icon-tabler icon-tabler-rewind-backward-15"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8 20h2a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H8v-3h3M15 18a6 6 0 1 0 0-12H4M5 14v6" />
    <Path d="M7 9 4 6l3-3" />
  </Svg>
);
export default SvgRewindBackward15;
