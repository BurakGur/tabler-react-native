import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWindowOff = ({
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
    className="icon icon-tabler icon-tabler-window-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M6.166 6.19A6.9 6.9 0 0 0 5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1m0-4v-5c0-3.728-3.134-7-7-7a6.86 6.86 0 0 0-3.804 1.158M5 13h8m4 0h2M12 3v5m0 4v9M3 3l18 18" />
  </Svg>
);
export default SvgWindowOff;
