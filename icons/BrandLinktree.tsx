import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandLinktree = ({
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
    className="icon icon-tabler icon-tabler-brand-linktree"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 10h16M6.5 4.5l11 11M6.5 15.5l11-11M12 10V2M12 15v7" />
  </svg>
);
export default SvgBrandLinktree;
