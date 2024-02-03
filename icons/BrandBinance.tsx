import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandBinance = ({
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
    className="icon icon-tabler icon-tabler-brand-binance"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m6 8 2 2 4-4 4 4 2-2-6-6zM6 16l2-2 4 4 3.5-3.5 2 2L12 22zM20 10l2 2-2 2-2-2zM4 10l2 2-2 2-2-2zM12 10l2 2-2 2-2-2z" />
  </svg>
);
export default SvgBrandBinance;
