import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCupra = ({
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
    className="icon icon-tabler icon-tabler-brand-cupra"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4.5 10 2 6l15.298 6.909a.2.2 0 0 1 .09.283L14 19" />
    <path d="m10 19-3.388-5.808a.2.2 0 0 1 .09-.283L22 6l-2.5 4" />
  </svg>
);
export default SvgBrandCupra;
