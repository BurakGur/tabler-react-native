import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandVisualStudio = ({
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
    className="icon icon-tabler icon-tabler-brand-visual-studio"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m4 8 2-1 10 13 4-2V6l-4-2L6 17l-2-1z" />
  </svg>
);
export default SvgBrandVisualStudio;
