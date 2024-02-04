import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgLetterCaseLower = ({
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
    className="icon icon-tabler icon-tabler-letter-case-lower"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 15.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M10 12v7M14 15.5a3.5 3.5 0 1 0 7 0 3.5 3.5 0 1 0-7 0M21 12v7" />
  </Svg>
);
export default SvgLetterCaseLower;
