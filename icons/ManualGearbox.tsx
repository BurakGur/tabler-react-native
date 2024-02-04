import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgManualGearbox = ({
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
    className="icon icon-tabler icon-tabler-manual-gearbox"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 8v8M12 8v8" />
    <Path d="M19 8v2a2 2 0 0 1-2 2H5" />
  </Svg>
);
export default SvgManualGearbox;
