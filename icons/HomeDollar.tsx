import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeDollar = ({
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
    className="icon icon-tabler icon-tabler-home-dollar"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m19 10-7-7-9 9h2v7a2 2 0 0 0 2 2h6" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2c.387 0 .748.11 1.054.3M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3H17M19 21v1m0-8v1" />
  </svg>
);
export default SvgHomeDollar;
