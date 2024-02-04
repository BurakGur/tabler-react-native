import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCarrotOff = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M8.868 8.846C6.112 12.228 3 21 3 21s8.75-3.104 12.134-5.85m1.667-2.342a4.486 4.486 0 0 0-5.589-5.615M9 13l-1.5-1.5" />
    <Path d="M22 8s-1.14-2-3-2c-1.406 0-3 2-3 2s1.14 2 3 2 3-2 3-2" />
    <Path d="M16 2s-2 1.14-2 3 2 3 2 3 2-1.577 2-3c0-1.86-2-3-2-3M3 3l18 18" />
  </Svg>
);
export default SvgCarrotOff;
