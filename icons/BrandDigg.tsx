import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandDigg = ({
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
    className="icon icon-tabler icon-tabler-brand-digg"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 15H3v-4h3M15 15h-3v-4h3M9 15v-4" />
    <path d="M15 11v7h-3M6 7v8M21 15h-3v-4h3" />
    <path d="M21 11v7h-3" />
  </svg>
);
export default SvgBrandDigg;
