import * as React from "react";
import type { SVGProps } from "react";
const SvgWashTemperature6 = ({
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
    className="icon icon-tabler icon-tabler-wash-temperature-6"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 15h.01M3 6l1.721 10.329A2 2 0 0 0 6.694 18h10.612a2 2 0 0 0 1.973-1.671L21 6M12 15h.01M15 15h.01M15 12h.01M12 12h.01M9 12h.01" />
    <path d="M3.486 8.965Q3.738 8.996 4 9c.79.009 1.539-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.539.18 2 .5.461.322 1.21.509 2 .5.79.009 1.539-.178 2-.5.461-.32 1.21-.507 2-.5.79-.007 1.539.18 2 .5.461.322 1.21.509 2 .5q.256-.002.503-.034" />
  </svg>
);
export default SvgWashTemperature6;
