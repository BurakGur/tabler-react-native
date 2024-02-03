import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencyBahraini = ({
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
    className="icon icon-tabler icon-tabler-currency-bahraini"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 10v1a4 4 0 0 0 4 4h2a2 2 0 0 0 2-2v-3M7 19.01V19M14 15.01V15M17 15h2a2 2 0 0 0 1.649-3.131L17.996 8" />
  </svg>
);
export default SvgCurrencyBahraini;
