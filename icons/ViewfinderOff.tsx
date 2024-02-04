import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgViewfinderOff = ({
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
    <Path d="M5.65 5.623a9 9 0 1 0 12.71 12.745m1.684-2.328A9 9 0 0 0 7.95 3.96M12 3v4M12 21v-3M3 12h4M21 12h-3M12 12v.01M3 3l18 18" />
  </Svg>
);
export default SvgViewfinderOff;
