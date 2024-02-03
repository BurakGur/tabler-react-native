import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsJoin2 = ({
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
    className="icon icon-tabler icon-tabler-arrows-join-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 7h1.948c1.913 0 3.705.933 4.802 2.5a5.86 5.86 0 0 0 4.802 2.5H21" />
    <path d="M3 17h1.95a5.85 5.85 0 0 0 4.798-2.5 5.85 5.85 0 0 1 4.798-2.5H20" />
    <path d="m18 15 3-3-3-3" />
  </svg>
);
export default SvgArrowsJoin2;
