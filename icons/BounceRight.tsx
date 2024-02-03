import * as React from "react";
import type { SVGProps } from "react";
const SvgBounceRight = ({
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
    className="icon icon-tabler icon-tabler-bounce-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 15.5c3-1 5.5-.5 8 4.5.5-3 1.5-5.5 3-8M18 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4" />
  </svg>
);
export default SvgBounceRight;
