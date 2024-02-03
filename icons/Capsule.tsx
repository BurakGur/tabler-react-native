import * as React from "react";
import type { SVGProps } from "react";
const SvgCapsule = ({
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
    className="icon icon-tabler icon-tabler-capsule"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 9a6 6 0 0 1 6-6h0a6 6 0 0 1 6 6v6a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6z" />
  </svg>
);
export default SvgCapsule;
