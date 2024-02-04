import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgBrandTwilio = ({
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
    className="icon icon-tabler icon-tabler-brand-twilio"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
    <Path d="M8 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M14 9a1 1 0 1 0 2 0 1 1 0 1 0-2 0M14 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 15a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </Svg>
);
export default SvgBrandTwilio;
