import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgMicrowaveOff = ({
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
    className="icon icon-tabler icon-tabler-microwave-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M18 18H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2m4 0h10a1 1 0 0 1 1 1v10M15 6v5m0 4v3M18 12h.01M18 9h.01" />
    <Path d="M6.5 10.5c1-.667 1.5-.667 2.5 0 .636.265 1.272.665 1.907.428M6.5 13.5c1-.667 1.5-.667 2.5 0 .833.347 1.667.926 2.5 0M3 3l18 18" />
  </Svg>
);
export default SvgMicrowaveOff;
