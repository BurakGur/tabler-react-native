import * as React from "react";
import type { SVGProps } from "react";
const SvgSeeding = ({
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
    className="icon icon-tabler icon-tabler-seeding"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 10a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3M12 14a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3M12 20V10" />
  </svg>
);
export default SvgSeeding;
