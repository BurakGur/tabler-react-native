import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrowserOff = ({
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
    className="icon icon-tabler icon-tabler-browser-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8 4h11a1 1 0 0 1 1 1v11m-.288 3.702A1 1 0 0 1 19 20H5a1 1 0 0 1-1-1V5c0-.276.112-.526.293-.707M4 8h4m4 0h8M3 3l18 18" />
  </Svg>
);
export default SvgBrowserOff;
