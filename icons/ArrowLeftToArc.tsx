import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftToArc = ({
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
    className="icon icon-tabler icon-tabler-arrow-left-to-arc"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 12H9M13 16l-4-4 4-4" />
    <path d="M12 3a9 9 0 1 0 0 18" />
  </svg>
);
export default SvgArrowLeftToArc;
