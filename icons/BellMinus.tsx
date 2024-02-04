import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBellMinus = ({
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
    <Path d="M12.5 17H4a4 4 0 0 0 2-3v-3a7 7 0 0 1 4-6 2 2 0 1 1 4 0 7 7 0 0 1 4 6v3c.047.386.149.758.3 1.107M9 17v1a3 3 0 0 0 3.504 2.958M16 19h6" />
  </Svg>
);
export default SvgBellMinus;
