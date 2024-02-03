import * as React from "react";
import type { SVGProps } from "react";
const SvgCircleArrowRight = ({
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
    className="icon icon-tabler icon-tabler-circle-arrow-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M16 12l-4-4M16 12H8M12 16l4-4" />
  </svg>
);
export default SvgCircleArrowRight;
