import * as React from "react";
import type { SVGProps } from "react";
const SvgSpray = ({
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
    className="icon icon-tabler icon-tabler-spray"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 12a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM6 10V6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4M15 7h.01M18 9h.01M18 5h.01M21 3h.01M21 7h.01M21 11h.01M10 7h1" />
  </svg>
);
export default SvgSpray;
