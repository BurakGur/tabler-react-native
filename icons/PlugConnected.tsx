import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPlugConnected = ({
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
    <Path d="m7 12 5 5-1.5 1.5a3.536 3.536 0 1 1-5-5zM17 12l-5-5 1.5-1.5a3.536 3.536 0 1 1 5 5zM3 21l2.5-2.5M18.5 5.5 21 3M10 11l-2 2M13 14l-2 2" />
  </Svg>
);
export default SvgPlugConnected;
