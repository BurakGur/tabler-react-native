import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgScaleOff = ({
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
    <Path d="M7 20h10M9.452 5.425 12 5l6 1M12 3v5m0 4v8M9 12 6 6l-3 6a3 3 0 0 0 6 0M18.873 14.871A3 3 0 0 0 21 12l-3-6-2.677 5.355M3 3l18 18" />
  </Svg>
);
export default SvgScaleOff;
