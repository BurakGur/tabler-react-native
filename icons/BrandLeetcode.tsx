import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandLeetcode = ({
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
    className="icon icon-tabler icon-tabler-brand-leetcode"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 13h7.5M9.424 7.268l4.999-4.999M16.633 16.644l-2.402 2.415a3.19 3.19 0 0 1-4.524 0l-3.77-3.787a3.223 3.223 0 0 1 0-4.544l3.77-3.787a3.19 3.19 0 0 1 4.524 0l2.302 2.313" />
  </svg>
);
export default SvgBrandLeetcode;
