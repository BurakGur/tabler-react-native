import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandGatsby = ({
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
    className="icon icon-tabler icon-tabler-brand-gatsby"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m3.296 14.297 6.407 6.407a9.02 9.02 0 0 1-6.325-6.116zM16 13h5c-.41 3.603-3.007 6.59-6.386 7.614L3.386 9.385A9 9 0 0 1 19.046 6.4" />
  </Svg>
);
export default SvgBrandGatsby;
