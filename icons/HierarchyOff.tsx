import * as React from "react";
import type { SVGProps } from "react";
const SvgHierarchyOff = ({
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
    className="icon icon-tabler icon-tabler-hierarchy-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 19a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17.585 17.587a2 2 0 0 0 2.813 2.843" />
    <path d="M6.5 17.5 12 13l5.5 4.5M12 7v1m0 4v1M3 3l18 18" />
  </svg>
);
export default SvgHierarchyOff;
