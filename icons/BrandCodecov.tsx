import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandCodecov = ({
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
    className="icon icon-tabler icon-tabler-brand-codecov"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9.695 12.985A5.97 5.97 0 0 0 6.4 12c-1.257 0-2.436.339-3.4 1a9 9 0 1 1 18 0c-.966-.664-2.14-1-3.4-1a6 6 0 0 0-5.605 8.144" />
  </svg>
);
export default SvgBrandCodecov;
