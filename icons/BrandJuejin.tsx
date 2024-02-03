import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandJuejin = ({
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
    className="icon icon-tabler icon-tabler-brand-juejin"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m2 12 10 7.422L22 12" />
    <path d="m7 9 5 4 5-4M11 6l1 .8 1-.8-1-.8z" />
  </svg>
);
export default SvgBrandJuejin;
