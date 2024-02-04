import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCurrencyIranianRial = ({
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
    className="icon icon-tabler icon-tabler-currency-iranian-rial"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M9 4v9a2 2 0 0 1-2 2H6a3 3 0 0 1-3-3v-1M12 5v8a1 1 0 0 0 1 1h1a2 2 0 0 0 2-2v-1M21 14v1.096a5 5 0 0 1-3.787 4.85L17 20M11 18h.01M14 18h.01" />
  </Svg>
);
export default SvgCurrencyIranianRial;
