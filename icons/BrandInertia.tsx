import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandInertia = ({
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
    className="icon icon-tabler icon-tabler-brand-inertia"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12.5 8 4 4-4 4H17l4-4-4-4zM3.5 8l4 4-4 4H8l4-4-4-4z" />
  </svg>
);
export default SvgBrandInertia;
