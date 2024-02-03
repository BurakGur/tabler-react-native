import * as React from "react";
import type { SVGProps } from "react";
const SvgBinaryTree = ({
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
    className="icon icon-tabler icon-tabler-binary-tree"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0M16 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0M16 20a2 2 0 1 0-4 0 2 2 0 0 0 4 0M11 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M21 12a2 2 0 1 0-4 0 2 2 0 0 0 4 0M5.058 18.306l2.88-4.606M10.061 10.303l2.877-4.604M10.065 13.705l2.876 4.6M15.063 5.7l2.881 4.61" />
  </svg>
);
export default SvgBinaryTree;
