import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandNetflix = ({
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
    className="icon icon-tabler icon-tabler-brand-netflix"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 3 10 18h-4L5 3zM5 3v18h4V10.5M19 21V3h-4v10.5" />
  </svg>
);
export default SvgBrandNetflix;
