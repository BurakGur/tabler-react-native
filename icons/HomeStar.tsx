import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeStar = ({
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
    className="icon icon-tabler icon-tabler-home-star"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19.258 10.258 12 3l-9 9h2v7a2 2 0 0 0 2 2h4" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h1.5M17.8 20.817l-2.172 1.138a.392.392 0 0 1-.568-.41l.415-2.411-1.757-1.707a.389.389 0 0 1 .217-.665l2.428-.352 1.086-2.193a.392.392 0 0 1 .702 0l1.086 2.193 2.428.352a.39.39 0 0 1 .217.665l-1.757 1.707.414 2.41a.39.39 0 0 1-.567.411z" />
  </svg>
);
export default SvgHomeStar;
