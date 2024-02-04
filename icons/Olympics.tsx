import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgOlympics = ({
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
    className="icon icon-tabler icon-tabler-olympics"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0M15 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0M9 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <Path d="M6 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0M12 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
  </Svg>
);
export default SvgOlympics;
