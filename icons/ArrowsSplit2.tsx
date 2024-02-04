import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgArrowsSplit2 = ({
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
    <Path d="M21 17h-5.397a5 5 0 0 1-4.096-2.133l-.514-.734A5 5 0 0 0 6.897 12H3M21 7h-5.395a5 5 0 0 0-4.098 2.135l-.51.73A5 5 0 0 1 6.9 12H3" />
    <Path d="m18 10 3-3-3-3M18 20l3-3-3-3" />
  </Svg>
);
export default SvgArrowsSplit2;
