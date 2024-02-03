import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowCapsule = ({
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
    className="icon icon-tabler icon-tabler-arrow-capsule"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 15a6 6 0 1 1-12 0V9a6 6 0 1 1 12 0v2" />
    <path d="m15 8 3 3 3-3" />
  </svg>
);
export default SvgArrowCapsule;
