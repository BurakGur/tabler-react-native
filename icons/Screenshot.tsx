import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgScreenshot = ({
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
    <Path d="M7 19a2 2 0 0 1-2-2M5 13v-2M5 7a2 2 0 0 1 2-2M11 5h2M17 5a2 2 0 0 1 2 2M19 11v2M19 17v4M21 19h-4M13 19h-2" />
  </Svg>
);
export default SvgScreenshot;
