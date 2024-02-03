import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyRufiyaa = ({
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
    className="icon icon-tabler icon-tabler-currency-rufiyaa"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 16h.01M4 16c9.5-4 11.5-8 14-9M12 8l5 3" />
  </svg>
);
export default SvgCurrencyRufiyaa;
