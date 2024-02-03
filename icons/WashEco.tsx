import * as React from "react";
import type { SVGProps } from "react";
const SvgWashEco = ({
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
    className="icon icon-tabler icon-tabler-wash-eco"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m3 6 1.721 10.329A2 2 0 0 0 6.694 18H12m8.162-6.972L21 6" />
    <path d="M3.486 8.965Q3.738 8.996 4 9c.79.009 1.539-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.539.18 2 .5.461.322 1.21.509 2 .5.79.009 1.539-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.539.18 2 .5.461.322 1.21.509 2 .5q.256-.002.503-.034M16 22s0-2 3-4" />
    <path d="M19 21a3 3 0 0 1 0-6h3v3a3 3 0 0 1-3 3" />
  </svg>
);
export default SvgWashEco;
