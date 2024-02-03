import * as React from "react";
import type { SVGProps } from "react";
const SvgAbacus = ({
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
    className="icon icon-tabler icon-tabler-abacus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 3v18M19 21V3M5 7h14M5 15h14M8 13v4M11 13v4M16 13v4M14 5v4M11 5v4M8 5v4M3 21h18" />
  </svg>
);
export default SvgAbacus;
