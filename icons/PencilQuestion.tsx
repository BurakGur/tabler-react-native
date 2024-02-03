import * as React from "react";
import type { SVGProps } from "react";
const SvgPencilQuestion = ({
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
    className="icon icon-tabler icon-tabler-pencil-question"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m8 20 6-6 3-3 1.5-1.5a2.828 2.828 0 1 0-4-4L4 16v4zM13.5 6.5l4 4M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
  </svg>
);
export default SvgPencilQuestion;
