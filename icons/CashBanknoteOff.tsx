import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCashBanknoteOff = ({
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
    className="icon icon-tabler icon-tabler-cash-banknote-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M9.88 9.878a3 3 0 1 0 4.242 4.243m.58-3.425a3 3 0 0 0-1.412-1.405" />
    <Path d="M10 6h9a2 2 0 0 1 2 2v8c0 .294-.064.574-.178.825M18 18H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1M18 12h.01M6 12h.01M3 3l18 18" />
  </Svg>
);
export default SvgCashBanknoteOff;
