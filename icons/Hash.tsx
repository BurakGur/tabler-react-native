import * as React from "react";
import type { SVGProps } from "react";
const SvgHash = ({
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
    className="icon icon-tabler icon-tabler-hash"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 9h14M5 15h14M11 4 7 20M17 4l-4 16" />
  </svg>
);
export default SvgHash;
