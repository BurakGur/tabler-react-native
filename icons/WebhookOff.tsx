import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgWebhookOff = ({
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
    <Path d="M4.876 13.61A4 4 0 1 0 11 17h6M15.066 20.502a4 4 0 0 0 4.763-.675M21 17a4 4 0 0 0-4-4" />
    <Path d="M16 8a4 4 0 0 0-6.824-2.833M8 8c0 1.506.77 2.818 2 3.5L7 17M3 3l18 18" />
  </Svg>
);
export default SvgWebhookOff;
