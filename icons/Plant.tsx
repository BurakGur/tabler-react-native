import * as React from "react";
import type { SVGProps } from "react";
const SvgPlant = ({
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
    className="icon icon-tabler icon-tabler-plant"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 15h10v4a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2zM12 9a6 6 0 0 0-6-6H3v2a6 6 0 0 0 6 6h3M12 11a6 6 0 0 1 6-6h3v1a6 6 0 0 1-6 6h-3M12 15V9" />
  </svg>
);
export default SvgPlant;
