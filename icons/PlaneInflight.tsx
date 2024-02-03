import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaneInflight = ({
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
    className="icon icon-tabler icon-tabler-plane-inflight"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 11.085h5a2 2 0 1 1 0 4H5l-3-6h3l2 2h3l-2-7h3zM3 21h18" />
  </svg>
);
export default SvgPlaneInflight;
