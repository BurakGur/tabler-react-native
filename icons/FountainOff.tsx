import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFountainOff = ({
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
    className="icon icon-tabler icon-tabler-fountain-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M9 16v-5a2 2 0 1 0-4 0M15 16v-1m0-4a2 2 0 1 1 4 0M12 16v-4m0-4V6a3 3 0 0 1 6 0" />
    <Path d="M7.451 3.43A3 3 0 0 1 12 6M20 16h1v1m-.871 3.114A3 3 0 0 1 18 21H6a3 3 0 0 1-3-3v-2h13M3 3l18 18" />
  </Svg>
);
export default SvgFountainOff;
