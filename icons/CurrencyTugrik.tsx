import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyTugrik = ({
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
    className="icon icon-tabler icon-tabler-currency-tugrik"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 6h10M12 6v13M8 17l8-3M16 10l-8 3" />
  </svg>
);
export default SvgCurrencyTugrik;
