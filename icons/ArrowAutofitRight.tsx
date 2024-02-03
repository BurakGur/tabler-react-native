import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowAutofitRight = ({
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
    className="icon icon-tabler icon-tabler-arrow-autofit-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8M4 18h17M18 15l3 3-3 3" />
  </svg>
);
export default SvgArrowAutofitRight;
