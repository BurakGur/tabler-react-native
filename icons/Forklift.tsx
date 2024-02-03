import * as React from "react";
import type { SVGProps } from "react";
const SvgForklift = ({
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
    className="icon icon-tabler icon-tabler-forklift"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M12 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0M7 17h5" />
    <path d="M3 17v-6h13v6M5 11V7h4M9 11V5h4l3 6M22 15h-3V5M16 13h3" />
  </svg>
);
export default SvgForklift;
