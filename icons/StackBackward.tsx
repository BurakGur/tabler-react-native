import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgStackBackward = ({
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
    className="icon icon-tabler icon-tabler-stack-backward"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="m14 12 6-3-8-4-8 4 6 3" />
    <Path fill="currentColor" d="m10 12-6 3 8 4 8-4-6-3-2 1z" />
  </Svg>
);
export default SvgStackBackward;
