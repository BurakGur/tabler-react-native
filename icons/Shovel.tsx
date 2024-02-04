import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShovel = ({
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
    <Path d="m17 4 3 3M18.5 5.5l-8 8M8.276 11.284l4.44 4.44a.97.97 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1-5.809-5.81l2.704-2.703a.97.97 0 0 1 1.37 0z" />
  </Svg>
);
export default SvgShovel;
