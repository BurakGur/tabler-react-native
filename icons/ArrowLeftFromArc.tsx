import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowLeftFromArc = ({
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
    className="icon icon-tabler icon-tabler-arrow-left-from-arc"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 12h12M17 16l4-4-4-4M12 3a9 9 0 1 0 0 18" />
  </svg>
);
export default SvgArrowLeftFromArc;
