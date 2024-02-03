import * as React from "react";
import type { SVGProps } from "react";
const SvgCurrencySom = ({
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
    className="icon icon-tabler icon-tabler-currency-som"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 18V6H5v10a2 2 0 0 1-2 2M14 6v12h4a3 3 0 0 0 0-6h-4 4a3 3 0 0 0 0-6z" />
  </svg>
);
export default SvgCurrencySom;
