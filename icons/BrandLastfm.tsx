import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandLastfm = ({
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
    className="icon icon-tabler icon-tabler-brand-lastfm"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 8c-.83-1-1.388-1-2-1s-2 .271-2 2 1.384 2.233 3 3 2.125 1.812 2 3-1 2-3 2-3-1-3.5-2-1.585-4.78-2.497-6a5 5 0 1 0-1 7" />
  </svg>
);
export default SvgBrandLastfm;
