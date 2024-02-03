import * as React from "react";
import type { SVGProps } from "react";
const SvgCarCrash = ({
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
    className="icon icon-tabler icon-tabler-car-crash"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 17a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="m7 6 4 5h1a2 2 0 0 1 2 2v4h-2m-4 0H3m0-6h8m-6 0V6m2 0H3M14 8V6M19 12h2M17.5 15.5 19 17M17.5 8.5 19 7" />
  </svg>
);
export default SvgCarCrash;
