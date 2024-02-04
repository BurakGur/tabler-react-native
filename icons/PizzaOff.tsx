import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPizzaOff = ({
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
    <Path d="M10.313 6.277 12 3l5.34 10.376m2.477 6.463A19.1 19.1 0 0 1 12 21.5c-3.04 0-5.952-.714-8.5-1.983L8.934 8.958" />
    <Path d="M5.38 15.866a14.94 14.94 0 0 0 6.815 1.634c1.56 0 3.105-.24 4.582-.713M11 14v-.01M3 3l18 18" />
  </Svg>
);
export default SvgPizzaOff;
