import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgSatellite = ({
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
    <Path d="m3.707 6.293 2.586-2.586a1 1 0 0 1 1.414 0l5.586 5.586a1 1 0 0 1 0 1.414l-2.586 2.586a1 1 0 0 1-1.414 0L3.707 7.707a1 1 0 0 1 0-1.414" />
    <Path d="m6 10-3 3 3 3 3-3M10 6l3-3 3 3-3 3M12 12l1.5 1.5M14.5 17a2.5 2.5 0 0 0 2.5-2.5M15 21a6 6 0 0 0 6-6" />
  </Svg>
);
export default SvgSatellite;
