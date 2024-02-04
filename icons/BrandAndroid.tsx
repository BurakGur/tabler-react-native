import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandAndroid = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-brand-android"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 10v6M20 10v6M7 9h10v8a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1za5 5 0 0 1 10 0M8 3l1 2M16 3l-1 2M9 18v3M15 18v3" />
  </Svg>
);
export default SvgBrandAndroid;
