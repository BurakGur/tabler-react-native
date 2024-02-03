import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandLine = ({
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
    className="icon icon-tabler icon-tabler-brand-line"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 10.663C21 6.439 16.959 3 12 3s-9 3.439-9 7.663c0 3.783 3.201 6.958 7.527 7.56 1.053.239.932.644.696 2.133-.039.238-.184.932.777.512.96-.42 5.18-3.201 7.073-5.48C20.377 13.884 21 12.359 21 10.673z" />
  </svg>
);
export default SvgBrandLine;
