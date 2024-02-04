import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRewindBackward20 = ({
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
    className="icon icon-tabler icon-tabler-rewind-backward-20"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M19.007 16.466A6 6 0 0 0 15 6H4" />
    <Path d="M7 9 4 6l3-3M12 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0M6 14h2a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H7a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2" />
  </Svg>
);
export default SvgRewindBackward20;
