import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPhotoVideo = ({
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
    <Path d="M9 15H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v3" />
    <Path d="M9 12a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3zM3 12l2.296-2.296a2.41 2.41 0 0 1 3.408 0L9 10" />
    <Path d="M14 13.5v3l2.5-1.5zM7 6v.01" />
  </Svg>
);
export default SvgPhotoVideo;
