import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgReceiptOff = ({
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
    <Path d="M5 21V5m2-2h10a2 2 0 0 1 2 2v10m0 4.01V21l-3-2-2 2-2-2-2 2-2-2-3 2M11 7h4M9 11h2M13 15h2M15 11v.01M3 3l18 18" />
  </Svg>
);
export default SvgReceiptOff;
