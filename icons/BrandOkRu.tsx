import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandOkRu = ({
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
    className="icon icon-tabler icon-tabler-brand-ok-ru"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M20 12c0 8 0 8-8 8s-8 0-8-8 0-8 8-8 8 0 8 8" />
    <path d="M9.5 13c1.333.667 3.667.667 5 0M9.5 17l2.5-3 2.5 3M12 13.5v.5" />
  </svg>
);
export default SvgBrandOkRu;
