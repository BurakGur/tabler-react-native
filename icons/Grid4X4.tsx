import * as React from "react";
import type { SVGProps } from "react";
const SvgGrid4X4 = ({
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
    className="icon icon-tabler icon-tabler-grid-4x4"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 6h18M3 12h18M3 18h18M6 3v18M12 3v18M18 3v18" />
  </svg>
);
export default SvgGrid4X4;
