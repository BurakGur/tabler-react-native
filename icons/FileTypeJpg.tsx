import * as React from "react";
import type { SVGProps } from "react";
const SvgFileTypeJpg = ({
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
    className="icon icon-tabler icon-tabler-file-type-jpg"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M5 12V5a2 2 0 0 1 2-2h7l5 5v4M11 18h1.5a1.5 1.5 0 0 0 0-3H11v6M20 15h-1a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h1v-3M5 15h3v4.5a1.5 1.5 0 0 1-3 0" />
  </svg>
);
export default SvgFileTypeJpg;
