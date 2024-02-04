import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCricket = ({
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
    <Path d="m11.105 18.79-1 .992a4.159 4.159 0 0 1-6.038-5.715l.157-.166L12.506 5.5l1.5 1.5 3.45-3.391a2.08 2.08 0 0 1 3.057 2.815l-.116.126L17.006 10l1.5 1.5-3.668 3.617M10.5 7.5l6 6" />
    <Path d="M11 18a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
  </Svg>
);
export default SvgCricket;
