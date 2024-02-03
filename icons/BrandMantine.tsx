import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandMantine = ({
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
    className="icon icon-tabler icon-tabler-brand-mantine"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0" />
    <path d="M11 16a4.97 4.97 0 0 0 2-4 5.01 5.01 0 0 0-2-4M14 9h-2M14 15h-2M10 12h.01" />
  </svg>
);
export default SvgBrandMantine;
