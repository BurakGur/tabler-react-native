import * as React from "react";
import type { SVGProps } from "react";
const SvgChecklist = ({
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
    className="icon icon-tabler icon-tabler-checklist"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9.615 20H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8M14 19l2 2 4-4M9 8h4M9 12h2" />
  </svg>
);
export default SvgChecklist;
