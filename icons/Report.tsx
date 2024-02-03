import * as React from "react";
import type { SVGProps } from "react";
const SvgReport = ({
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
    className="icon icon-tabler icon-tabler-report"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5.697M18 14v4h4M18 11V7a2 2 0 0 0-2-2h-2" />
    <path d="M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v0a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2M14 18a4 4 0 1 0 8 0 4 4 0 1 0-8 0M8 11h4M8 15h3" />
  </svg>
);
export default SvgReport;
