import * as React from "react";
import type { SVGProps } from "react";
const SvgBinaryTree2 = ({
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
    className="icon icon-tabler icon-tabler-binary-tree-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0M7 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0M21 14a2 2 0 1 0-4 0 2 2 0 0 0 4 0M14 18a2 2 0 1 0-4 0 2 2 0 0 0 4 0M12 8v8M6.316 12.496l4.368-4.992M17.684 12.496l-4.366-4.99" />
  </svg>
);
export default SvgBinaryTree2;
