import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBookmarkEdit = ({
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
    <Path d="m12 17-6 4V7a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v4M18.42 15.61a2.1 2.1 0 1 1 2.97 2.97L18 22h-3v-3z" />
  </Svg>
);
export default SvgBookmarkEdit;
