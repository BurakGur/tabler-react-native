import * as React from "react";
import type { SVGProps } from "react";
const SvgFlagDiscount = ({
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
    className="icon icon-tabler icon-tabler-flag-discount"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12.804 14.641A5 5 0 0 1 12 14a5 5 0 0 0-7 0V5a5 5 0 0 1 7 0 5 5 0 0 0 7 0v8M5 21v-7M16 21l5-5M21 21v.01M16 16v.01" />
  </svg>
);
export default SvgFlagDiscount;
