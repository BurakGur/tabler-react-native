import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCreditCardOff = ({
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
    <Path d="m3 3 18 18M9 5h9a3 3 0 0 1 3 3v8a3 3 0 0 1-.128.87M18.87 18.872A3 3 0 0 1 18 19H6a3 3 0 0 1-3-3V8a3 3 0 0 1 2.124-2.87M3 11h8M15 11h6M7 15h.01M11 15h2" />
  </Svg>
);
export default SvgCreditCardOff;
