import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgFileReport = ({
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
    <Path d="M13 17a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
    <Path d="M17 13v4h4M12 3v4a1 1 0 0 0 1 1h4" />
    <Path d="M11.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v2m0 3v4" />
  </Svg>
);
export default SvgFileReport;
