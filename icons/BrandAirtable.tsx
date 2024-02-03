import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandAirtable = ({
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
    className="icon icon-tabler icon-tabler-brand-airtable"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 10v8l7-3v-2.6zM3 6l9 3 9-3-9-3zM14 12.3V21l7-3v-8z" />
  </svg>
);
export default SvgBrandAirtable;
