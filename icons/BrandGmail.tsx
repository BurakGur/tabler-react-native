import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandGmail = ({
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
    className="icon icon-tabler icon-tabler-brand-gmail"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 20h3a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-3zM5 20h3V4H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1M16 4l-4 4-4-4" />
    <path d="m4 6.5 8 7.5 8-7.5" />
  </svg>
);
export default SvgBrandGmail;
