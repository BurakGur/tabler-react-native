import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandSupabase = ({
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
    className="icon icon-tabler icon-tabler-brand-supabase"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 14h8v7l8-11h-8V3z" />
  </svg>
);
export default SvgBrandSupabase;
