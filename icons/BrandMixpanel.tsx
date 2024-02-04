import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandMixpanel = ({
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
    <Path d="M2 12a2.5 2.5 0 1 0 5 0 2.5 2.5 0 1 0-5 0M19 12a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M11 12a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
  </Svg>
);
export default SvgBrandMixpanel;
