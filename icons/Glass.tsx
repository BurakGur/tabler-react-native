import * as React from "react";
import type { SVGProps } from "react";
const SvgGlass = ({
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
    className="icon icon-tabler icon-tabler-glass"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 21h8M12 16v5M17 5l1 6c0 3.012-2.686 5-6 5s-6-1.988-6-5l1-6" />
    <path d="M7 5a5 2 0 1 0 10 0A5 2 0 1 0 7 5" />
  </svg>
);
export default SvgGlass;
