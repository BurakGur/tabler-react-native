import * as React from "react";
import type { SVGProps } from "react";
const SvgGenderBigender = ({
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
    className="icon icon-tabler icon-tabler-gender-bigender"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 11a4 4 0 1 0 8 0 4 4 0 1 0-8 0M19 3l-5 5M15 3h4v4M11 16v6M8 19h6" />
  </svg>
);
export default SvgGenderBigender;
