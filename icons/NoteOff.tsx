import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgNoteOff = ({
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
    <Path d="m13 20 3.505-3.505m2-2 1.501-1.501M17 13h3V6a2 2 0 0 0-2-2H8m-3.427.6C4.218 4.96 4 5.453 4 6v12a2 2 0 0 0 2 2h7v-6c0-.272.109-.519.285-.699M3 3l18 18" />
  </Svg>
);
export default SvgNoteOff;
