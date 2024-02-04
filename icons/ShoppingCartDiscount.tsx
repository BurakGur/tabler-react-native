import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const SvgShoppingCartDiscount = ({
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
    className="icon icon-tabler icon-tabler-shopping-cart-discount"
    {...props}
  >
    <Path stroke="none" d="M0 0h24v24H0z" />
    <Path d="M4 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0" />
    <Path d="M12.5 17H6V3H4" />
    <Path d="m6 5 14 1-.859 6.011M13 13H6M16 21l5-5M21 21v.01M16 16v.01" />
  </Svg>
);
export default SvgShoppingCartDiscount;
