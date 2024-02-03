import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandXdeep = ({
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
    className="icon icon-tabler icon-tabler-brand-xdeep"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14.401 8.398 16 6h5l-4 6 4 6h-5L8 6H3l4 6-4 6h5l1.596-2.393" />
  </svg>
);
export default SvgBrandXdeep;
