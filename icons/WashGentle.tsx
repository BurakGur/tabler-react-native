import * as React from "react";
import type { SVGProps } from "react";
const SvgWashGentle = ({
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
    className="icon icon-tabler icon-tabler-wash-gentle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3.486 5.965Q3.738 5.996 4 6c.79.009 1.539-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.539.18 2 .5.461.322 1.21.509 2 .5.79.009 1.539-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.539.18 2 .5.461.322 1.21.509 2 .5.17 0 .339-.014.503-.034" />
    <path d="m3 3 1.721 10.329A2 2 0 0 0 6.694 15h10.612a2 2 0 0 0 1.973-1.671L21 3M5 18h14M5 21h14" />
  </svg>
);
export default SvgWashGentle;
