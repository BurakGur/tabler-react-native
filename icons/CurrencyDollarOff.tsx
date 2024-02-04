import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCurrencyDollarOff = ({
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
    viewBox="0 0 24 24"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M16.7 8A3 3 0 0 0 14 6h-4M7.443 7.431A3 3 0 0 0 10 12h2m4.564 4.558A3 3 0 0 1 14 18h-4a3 3 0 0 1-2.7-2M12 3v3m0 12v3M3 3l18 18" />
  </Svg>
);
export default SvgCurrencyDollarOff;
