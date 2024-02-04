import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgRouteAltLeft = ({
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
    <Path d="M8 3H3v5M16 3h5v5" />
    <Path d="m3 3 7.536 7.536A5 5 0 0 1 12 14.07V21M18 6.01V6M16 8.02v-.01M14 10v.01" />
  </Svg>
);
export default SvgRouteAltLeft;
