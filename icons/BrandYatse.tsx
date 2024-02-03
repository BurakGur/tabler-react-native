import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandYatse = ({
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
    className="icon icon-tabler icon-tabler-brand-yatse"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m7 3 5 2.876v5.088l4.197-2.73L21 10.965l-9.281 5.478-2.383 1.41-2.334 1.377-3 1.77v-5.565l3-1.771z" />
  </svg>
);
export default SvgBrandYatse;
