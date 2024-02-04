import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeUp = ({
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
    <Path d="M9 21v-6a2 2 0 0 1 2-2h2c.641 0 1.212.302 1.578.771" />
    <Path d="M20.136 11.136 12 3l-9 9h2v7a2 2 0 0 0 2 2h6.344M19 22v-6M22 19l-3-3-3 3" />
  </Svg>
);
export default SvgHomeUp;
