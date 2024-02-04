import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandOkRu = ({
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
    <Path d="M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <Path d="M20 12c0 8 0 8-8 8s-8 0-8-8 0-8 8-8 8 0 8 8" />
    <Path d="M9.5 13c1.333.667 3.667.667 5 0M9.5 17l2.5-3 2.5 3M12 13.5v.5" />
  </Svg>
);
export default SvgBrandOkRu;
