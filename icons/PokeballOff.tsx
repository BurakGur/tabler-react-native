import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgPokeballOff = ({
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
    <Path d="M20.04 16.048A9 9 0 0 0 7.957 3.958m-2.32 1.678a9 9 0 1 0 12.737 12.719" />
    <Path d="M9.884 9.874a3 3 0 1 0 4.24 4.246m.57-3.441a3 3 0 0 0-1.41-1.39M3 12h6m7 0h5M3 3l18 18" />
  </Svg>
);
export default SvgPokeballOff;
