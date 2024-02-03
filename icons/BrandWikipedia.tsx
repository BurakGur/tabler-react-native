import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandWikipedia = ({
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
    className="icon icon-tabler icon-tabler-brand-wikipedia"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 4.984h2M8 4.984h2.5M14.5 4.984H17M22 4.984h-2M4 4.984 9.455 19.5 16 4.984" />
    <path d="M9 4.984 15 19.5l6-14.516" />
  </svg>
);
export default SvgBrandWikipedia;
