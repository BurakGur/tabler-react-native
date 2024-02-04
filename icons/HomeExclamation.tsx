import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgHomeExclamation = ({
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
    className="icon icon-tabler icon-tabler-home-exclamation"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m21 12-9-9-9 9h2v7a2 2 0 0 0 2 2h8" />
    <Path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 1.857 1.257M19 16v3M19 22v.01" />
  </Svg>
);
export default SvgHomeExclamation;
