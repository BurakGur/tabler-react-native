import * as React from "react";
import type { SVGProps } from "react";
const SvgFileTypeTxt = ({
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
    className="icon icon-tabler icon-tabler-file-type-txt"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4M16.5 15h3" />
    <path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M4.5 15h3M6 15v6M18 15v6M10 15l4 6M10 21l4-6" />
  </svg>
);
export default SvgFileTypeTxt;
