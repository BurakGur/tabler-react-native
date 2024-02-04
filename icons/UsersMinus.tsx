import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgUsersMinus = ({
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
    <Path d="M5 7a4 4 0 1 0 8 0 4 4 0 0 0-8 0M3 21v-2a4 4 0 0 1 4-4h4c.948 0 1.818.33 2.504.88M16 3.13a4 4 0 0 1 0 7.75M16 19h6" />
  </Svg>
);
export default SvgUsersMinus;
