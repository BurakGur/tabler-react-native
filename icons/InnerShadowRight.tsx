import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgInnerShadowRight = ({
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
    <Path d="M18.364 18.364A9 9 0 1 1 5.636 5.636a9 9 0 0 1 12.728 12.728" />
    <Path d="M16.243 7.757a6 6 0 0 1 0 8.486" />
  </Svg>
);
export default SvgInnerShadowRight;
