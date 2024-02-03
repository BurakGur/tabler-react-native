import * as React from "react";
import type { SVGProps } from "react";
const SvgGrill = ({
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
    className="icon icon-tabler icon-tabler-grill"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 8H5a6 6 0 0 0 6 6h2a6 6 0 0 0 6-5.775zM17 20a2 2 0 1 1 0-4 2 2 0 0 1 0 4M15 14l1 2M9 14l-3 6M15 18H7M15 5V4M12 5V4M9 5V4" />
  </svg>
);
export default SvgGrill;
