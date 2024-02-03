import * as React from "react";
import type { SVGProps } from "react";
const SvgHierarchy2 = ({
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
    className="icon icon-tabler icon-tabler-hierarchy-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 3h4v4h-4zM3 17h4v4H3zM17 17h4v4h-4zM7 17l5-4 5 4M12 7v6" />
  </svg>
);
export default SvgHierarchy2;
