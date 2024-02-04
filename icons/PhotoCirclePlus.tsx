import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPhotoCirclePlus = ({
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
    <Path d="M15 8h.01M20.964 12.806A9 9 0 0 0 12 3a9 9 0 0 0-9 9 9 9 0 0 0 9.397 8.991" />
    <Path d="m4 15 4-4c.928-.893 2.072-.893 3 0l4 4" />
    <Path d="m14 14 1-1c.928-.893 2.072-.893 3 0M16 19.33h6M19 16.33v6" />
  </Svg>
);
export default SvgPhotoCirclePlus;
