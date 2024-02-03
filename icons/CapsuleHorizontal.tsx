import * as React from "react";
import type { SVGProps } from "react";
const SvgCapsuleHorizontal = ({
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
    className="icon icon-tabler icon-tabler-capsule-horizontal"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 12a6 6 0 0 1 6-6h6a6 6 0 0 1 6 6v0a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6" />
  </svg>
);
export default SvgCapsuleHorizontal;
