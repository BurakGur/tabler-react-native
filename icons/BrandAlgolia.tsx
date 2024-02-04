import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandAlgolia = ({
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
    <Path d="M15.5 11c-.414-1.477-1.886-2.5-3.5-2.5A3.47 3.47 0 0 0 8.5 12a3.47 3.47 0 0 0 3.5 3.5c.974 0 1.861-.357 2.5-1L19 19V4h-7c-4.386 0-8 3.582-8 8s3.614 8 8 8a7.6 7.6 0 0 0 2.998-.614" />
  </Svg>
);
export default SvgBrandAlgolia;
