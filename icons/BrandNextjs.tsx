import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandNextjs = ({
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
    className="icon icon-tabler icon-tabler-brand-nextjs"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 15V9l7.745 10.65A9 9 0 1 1 19 17.657M15 12V9" />
  </svg>
);
export default SvgBrandNextjs;
