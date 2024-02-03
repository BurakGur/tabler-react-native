import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandLoom = ({
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
    className="icon icon-tabler icon-tabler-brand-loom"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17.464 6.518a6 6 0 1 0-3.023 7.965" />
    <path d="M17.482 17.464a6 6 0 1 0-7.965-3.023" />
    <path d="M6.54 17.482a6 6 0 1 0 3.024-7.965" />
    <path d="M6.518 6.54a6 6 0 1 0 7.965 3.024" />
  </svg>
);
export default SvgBrandLoom;
