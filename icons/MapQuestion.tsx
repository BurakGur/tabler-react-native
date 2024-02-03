import * as React from "react";
import type { SVGProps } from "react";
const SvgMapQuestion = ({
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
    className="icon icon-tabler icon-tabler-map-question"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m15 20-6-3-6 3V7l6-3 6 3 6-3v7.5M9 4v13M15 7v5.5M19 22v.01" />
    <path d="M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
  </svg>
);
export default SvgMapQuestion;
