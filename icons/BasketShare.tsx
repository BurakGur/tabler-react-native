import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBasketShare = ({
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
    <Path d="m17 10-2-6M7 10l2-6M12.5 20H7.244a3 3 0 0 1-2.965-2.544l-1.255-7.152A2 2 0 0 1 5.001 8H19a2 2 0 0 1 1.977 2.304l-.478 2.723" />
    <Path d="M14 14a2 2 0 1 0-2 2M16 22l5-5M21 21.5V17h-4.5" />
  </Svg>
);
export default SvgBasketShare;
