import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlant = ({
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
    <Path d="M7 15h10v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zM12 9a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3M12 11a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3M12 15V9" />
  </Svg>
);
export default SvgPlant;
