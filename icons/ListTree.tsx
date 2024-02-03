import * as React from "react";
import type { SVGProps } from "react";
const SvgListTree = ({
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
    className="icon icon-tabler icon-tabler-list-tree"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 6h11M12 12h8M15 18h5M5 6v.01M8 12v.01M11 18v.01" />
  </svg>
);
export default SvgListTree;
