import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgCurrencyEuroOff = ({
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
    className="icon icon-tabler icon-tabler-currency-euro-off"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M17.2 7c-1.977-2.26-4.954-2.602-7.234-1.04M8.053 8.039c-1.604 2.72-1.374 6.469.69 8.894 2.292 2.691 6 2.758 8.356.18M10 10H5m0 4h8M3 3l18 18" />
  </Svg>
);
export default SvgCurrencyEuroOff;
