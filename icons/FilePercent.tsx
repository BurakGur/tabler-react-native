import * as React from "react";
import type { SVGProps } from "react";
const SvgFilePercent = ({
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
    className="icon icon-tabler icon-tabler-file-percent"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m10 17 4-4M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2M10 13h.01M14 17h.01" />
  </svg>
);
export default SvgFilePercent;
