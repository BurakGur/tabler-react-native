import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandCouchsurfing = ({
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
    <Path d="M3.1 13q4.9 0 7.9-.5c3-.5 4-2 4-3.5a3 3 0 1 0-6 0c0 1.554 1.807 3 3 4s2 2.5 2 3.5a1.5 1.5 0 1 1-3 0c0-2 4-3.5 7-3.5h2.9" />
    <Path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
  </Svg>
);
export default SvgBrandCouchsurfing;
