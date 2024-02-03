import * as React from "react";
import type { SVGProps } from "react";
const SvgKarate = ({
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
    className="icon icon-tabler icon-tabler-karate"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 9l4.5 1 3 2.5M13 21v-8l3-5.5" />
    <path d="m8 4.5 4 2 4 1 4 3.5-2 3.5" />
  </svg>
);
export default SvgKarate;
