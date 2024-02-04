import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVacuumCleaner = ({
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
    <Path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
    <Path d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0M12 16h.01" />
  </Svg>
);
export default SvgVacuumCleaner;
