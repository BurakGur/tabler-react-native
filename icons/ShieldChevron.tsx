import * as React from "react";
import type { SVGProps } from "react";
const SvgShieldChevron = ({
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
    className="icon icon-tabler icon-tabler-shield-chevron"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 3a12 12 0 0 0 8.5 3A12 12 0 0 1 12 21 12 12 0 0 1 3.5 6 12 12 0 0 0 12 3" />
    <path d="m4 14 8-3 8 3" />
  </svg>
);
export default SvgShieldChevron;
