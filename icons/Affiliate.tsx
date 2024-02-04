import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgAffiliate = ({
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
    <Path d="m5.931 6.936 1.275 4.249m5.607 5.609 4.251 1.275M11.683 12.317l5.759-5.759M4 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M17 5.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M17 18.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M4 15.5a4.5 4.5 0 1 0 9 0 4.5 4.5 0 1 0-9 0" />
  </Svg>
);
export default SvgAffiliate;
