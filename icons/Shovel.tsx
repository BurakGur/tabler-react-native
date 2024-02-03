import * as React from "react";
import type { SVGProps } from "react";
const SvgShovel = ({
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
    className="icon icon-tabler icon-tabler-shovel"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m17 4 3 3M18.5 5.5l-8 8M8.276 11.284l4.44 4.44a.97.97 0 0 1 0 1.369l-2.704 2.704a4.108 4.108 0 0 1-5.809-5.81l2.704-2.703a.97.97 0 0 1 1.37 0z" />
  </svg>
);
export default SvgShovel;
