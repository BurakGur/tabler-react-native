import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandVisa = ({
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
    className="icon icon-tabler icon-tabler-brand-visa"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m21 15-1-6-2.5 6M9 15l1-6M3 9h1v6h.5L7 9M16 9.5a.5.5 0 0 0-.5-.5h-.75c-.721 0-1.337.521-1.455 1.233l-.09.534A1.06 1.06 0 0 0 14.25 12a1.06 1.06 0 0 1 1.045 1.233l-.09.534A1.476 1.476 0 0 1 13.75 15H13a.5.5 0 0 1-.5-.5M18 14h2.7" />
  </svg>
);
export default SvgBrandVisa;
