import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBandageOff = ({
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
    className="icon icon-tabler icon-tabler-bandage-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M10 12v.01M12 14v.01M10.513 6.487 12.5 4.5a4.95 4.95 0 0 1 7 7l-2.018 2.018M15.5 15.5l-4 4a4.95 4.95 0 0 1-7-7l4-4M3 3l18 18" />
  </Svg>
);
export default SvgBandageOff;
