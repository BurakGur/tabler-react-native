import * as React from "react";
import type { SVGProps } from "react";
const SvgMicrowave = ({
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
    className="icon icon-tabler icon-tabler-microwave"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zM15 6v12M18 12h.01M18 15h.01M18 9h.01" />
    <path d="M6.5 10.5c1-.667 1.5-.667 2.5 0 .833.347 1.667.926 2.5 0M6.5 13.5c1-.667 1.5-.667 2.5 0 .833.347 1.667.926 2.5 0" />
  </svg>
);
export default SvgMicrowave;
