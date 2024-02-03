import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandNem = ({
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
    className="icon icon-tabler icon-tabler-brand-nem"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12.182 2q2.91.033 5.818 1.08l.364.135A23 23 0 0 1 22 5q0 8.427-5.87 13.92-1.86 1.858-3.78 2.898L12 22q-2.1-1.054-4.13-3.079Q2.001 13.427 2 5q3.817-2.29 7.636-2.832L10 2.12A17 17 0 0 1 11.818 2z" />
    <path d="M2.1 7.07Q5.21 17.15 12 10q0-6 4.07-7.06l.59-.11M16.35 18.51S19 13 12 10" />
  </svg>
);
export default SvgBrandNem;
