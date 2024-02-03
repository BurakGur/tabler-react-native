import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyDong = ({
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
    className="icon icon-tabler icon-tabler-currency-dong"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 19h12M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0M16 16V4M17 5h-4" />
  </svg>
);
export default SvgCurrencyDong;
