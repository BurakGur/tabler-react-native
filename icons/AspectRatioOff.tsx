import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAspectRatioOff = ({
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
    <Path d="M9 5h10a2 2 0 0 1 2 2v10m-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2" />
    <Path d="M7 12V9h2M17 12v1m-2 2h-1M3 3l18 18" />
  </Svg>
);
export default SvgAspectRatioOff;
