import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgGiftCard = ({
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
    className="icon icon-tabler icon-tabler-gift-card"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M3 8a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3z" />
    <Path d="m7 16 3-3 3 3M8 13c-.789 0-2-.672-2-1.5S6.711 10 7.5 10c1.128-.02 2.077 1.17 2.5 3 .423-1.83 1.372-3.02 2.5-3 .789 0 1.5.672 1.5 1.5S12.789 13 12 13z" />
  </Svg>
);
export default SvgGiftCard;
