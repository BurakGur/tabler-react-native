import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandNpm = ({
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
    className="icon icon-tabler icon-tabler-brand-npm"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M1 8h22v7H11v2H7v-2H1zM7 8v7M14 8v7M17 11v4M4 11v4M11 11v1M20 11v4" />
  </svg>
);
export default SvgBrandNpm;
