import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandVscode = ({
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
    className="icon icon-tabler icon-tabler-brand-vscode"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 3v18l4-2.5v-13zM9.165 13.903 5 17.5l-2-1L7.333 12m1.735-1.802L16 3v5l-4.795 4.141" />
    <path d="M16 16.5 5 6.5l-2 1L16 21" />
  </svg>
);
export default SvgBrandVscode;
