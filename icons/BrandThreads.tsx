import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandThreads = ({
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
    className="icon icon-tabler icon-tabler-brand-threads"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 7.5Q17 3 12 3c-5 0-8 2.5-8 9s3.5 9 8 9 7-3 7-5-1-5-7-5c-2.5 0-3 1.25-3 2.5C9 15 10 16 11.5 16c2.5 0 3.5-1.5 3.5-5s-2-4-3-4-1.833.333-2.5 1" />
  </svg>
);
export default SvgBrandThreads;
