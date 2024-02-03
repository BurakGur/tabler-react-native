import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyYenOff = ({
  size = 24,
  stroke = 2,
  ...props
}: {
  size: number,
  stroke: number,
  props: SVGProps,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={stroke}
    className="icon icon-tabler icon-tabler-currency-yen-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 19v-7m5-7-3.328 4.66M8 17h8M8 13h5M3 3l18 18" />
  </svg>
);
export default SvgCurrencyYenOff;
