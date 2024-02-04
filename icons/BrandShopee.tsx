import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandShopee = ({
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
    <Path d="m4 7 .867 12.143a2 2 0 0 0 2 1.857h10.276a2 2 0 0 0 2-1.857L20.01 7h-16zM8.5 7c0-1.653 1.5-4 3.5-4s3.5 2.347 3.5 4" />
    <Path d="M9.5 17c.413.462 1 1 2.5 1s2.5-.897 2.5-2-1-1.5-2.5-2-2-1.47-2-2c0-1.104 1-2 2-2s1.5 0 2.5 1" />
  </Svg>
);
export default SvgBrandShopee;
