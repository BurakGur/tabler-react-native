import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHandOff = ({
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
    <Path d="m3 3 18 18M8 13.5V8m.44-3.562A1.5 1.5 0 0 1 11 5.5V7m0 4.008V12m0-6.5v-2a1.5 1.5 0 1 1 3 0V10m0-4.5a1.5 1.5 0 0 1 3 0V12m0-4.5a1.5 1.5 0 0 1 3 0V16a6 6 0 0 1-6 6h-2c-2.114-.292-3.956-1.397-5-3l-2.7-5.25a1.7 1.7 0 0 1 2.75-2l.9 1.75" />
  </Svg>
);
export default SvgHandOff;
