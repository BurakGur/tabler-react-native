import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPhotoCircleMinus = ({
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
    <Path d="M15 8h.01M20.475 15.035A9 9 0 0 0 12 3a9 9 0 0 0-9 9 9 9 0 0 0 9.525 8.985" />
    <Path d="m4 15 4-4c.928-.893 2.072-.893 3 0l4 4" />
    <Path d="m14 14 1-1c.928-.893 2.072-.893 3 0l2 2M16 19h6" />
  </Svg>
);
export default SvgPhotoCircleMinus;
