import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowAutofitContent = ({
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
    className="icon icon-tabler icon-tabler-arrow-autofit-content"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 4 3 7l3 3M18 4l3 3-3 3M4 16a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM10 7H3M21 7h-7" />
  </svg>
);
export default SvgArrowAutofitContent;
