import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgVinyl = ({
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
    <Path d="M16 3.937A9 9 0 1 0 21 12" />
    <Path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M19 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <Path d="m20 4-3.5 10-2.5 2" />
  </Svg>
);
export default SvgVinyl;
