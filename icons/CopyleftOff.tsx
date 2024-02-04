import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCopyleftOff = ({
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
    <Path d="M13.303 9.3a3 3 0 0 1 1.405 1.406m-.586 3.413A3.016 3.016 0 0 1 10 14.25" />
    <Path d="M20.042 16.045A9 9 0 0 0 7.955 3.958M5.637 5.635a9 9 0 1 0 12.725 12.73M3 3l18 18" />
  </Svg>
);
export default SvgCopyleftOff;
