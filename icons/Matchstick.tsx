import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMatchstick = ({
  size = 24,
  stroke = 2,
  color = "currentColor",
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
    className="icon icon-tabler icon-tabler-matchstick"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m3 21 14-9M16 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <Path d="m17 3 3.62 7.29a4.01 4.01 0 0 1-.764 4.51 4 4 0 0 1-6.493-4.464z" />
  </Svg>
);
export default SvgMatchstick;
