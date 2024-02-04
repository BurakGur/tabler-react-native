import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandZhihu = ({
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
    <Path d="M14 6h6v12h-2l-2 2-1-2h-1zM4 12h6.5M10.5 6h-5M6 4c-.5 2.5-1.5 3.5-2.5 4.5M8 6v7c0 4.5-2 5.5-4 7M11 18l-3-5" />
  </Svg>
);
export default SvgBrandZhihu;
