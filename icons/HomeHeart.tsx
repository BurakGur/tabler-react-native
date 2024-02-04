import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeHeart = ({
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
    <Path d="m21 12-9-9-9 9h2v7a2 2 0 0 0 2 2h6" />
    <Path d="M9 21v-6a2 2 0 0 1 2-2h2c.39 0 .754.112 1.061.304M19 21.5l2.518-2.58a1.74 1.74 0 0 0 0-2.413 1.627 1.627 0 0 0-2.346 0l-.168.172-.168-.172a1.627 1.627 0 0 0-2.346 0 1.74 1.74 0 0 0 0 2.412l2.51 2.59z" />
  </Svg>
);
export default SvgHomeHeart;
