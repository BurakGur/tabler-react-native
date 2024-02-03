import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandBlender = ({
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
    className="icon icon-tabler icon-tabler-brand-blender"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 14a6 5 0 1 0 12 0 6 5 0 1 0-12 0" />
    <path d="M14 14a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 16l9-6.5M6 9h9M13 5l5.65 5" />
  </svg>
);
export default SvgBrandBlender;
