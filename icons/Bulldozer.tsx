import * as React from "react";
import type { SVGProps } from "react";
const SvgBulldozer = ({
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
    className="icon icon-tabler icon-tabler-bulldozer"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M12 17a2 2 0 1 0 4 0 2 2 0 0 0-4 0M19 13v4a2 2 0 0 0 2 2h1M14 19H4M4 15h10" />
    <path d="M9 11V6h2a3 3 0 0 1 3 3v6" />
    <path d="M5 15v-3a1 1 0 0 1 1-1h8M19 17h-3" />
  </svg>
);
export default SvgBulldozer;
