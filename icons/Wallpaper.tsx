import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWallpaper = ({
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
    <Path d="M8 6h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6" />
    <Path d="M4 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <Path d="M8 18V6a2 2 0 1 0-4 0v12" />
  </Svg>
);
export default SvgWallpaper;
