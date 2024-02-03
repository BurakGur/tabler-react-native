import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGrammarly = ({
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
    className="icon icon-tabler icon-tabler-brand-grammarly"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="M15.697 9.434a4.5 4.5 0 1 0 .217 4.788" />
    <path d="M13.5 14H16v2.5" />
  </svg>
);
export default SvgBrandGrammarly;
