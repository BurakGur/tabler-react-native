import * as React from "react";
import type { SVGProps } from "react";
const SvgFileTypeVue = ({
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
    className="icon icon-tabler icon-tabler-file-type-vue"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M4 15l2 6 2-6M11 15v4.5a1.5 1.5 0 0 0 3 0V15M20 15h-3v6h3M17 18h2" />
  </svg>
);
export default SvgFileTypeVue;
