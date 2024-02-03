import * as React from "react";
import type { SVGProps } from "react";
const SvgBed = ({
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
    className="icon icon-tabler icon-tabler-bed"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 9a2 2 0 1 0 4 0 2 2 0 1 0-4 0M22 17v-3H2M2 8v9M12 14h10v-2a3 3 0 0 0-3-3h-7z" />
  </svg>
);
export default SvgBed;
