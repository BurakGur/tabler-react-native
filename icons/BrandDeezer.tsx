import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandDeezer = ({
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
    <Path d="M3 16.5h2v.5H3zM8 16.5h2.5v.5H8zM16 17h-2.5v-.5H16zM21.5 17H19v-.5h2.5zM21.5 13H19v.5h2.5zM21.5 9.5H19v.5h2.5zM21.5 6H19v.5h2.5zM16 13h-2.5v.5H16zM8 13.5h2.5V13H8zM8 9.5h2.5v.5H8z" />
  </Svg>
);
export default SvgBrandDeezer;
