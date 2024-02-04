import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCurrencyZloty = ({
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
    className="icon icon-tabler icon-tabler-currency-zloty"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M12 18H5l7-7H5M17 18V5M14 14.5l6-3.5" />
  </Svg>
);
export default SvgCurrencyZloty;
