import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsJoin = ({
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
    className="icon icon-tabler icon-tabler-arrows-join"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 7h5l3.5 5H21M3 17h5l3.495-5" />
    <path d="m18 15 3-3-3-3" />
  </svg>
);
export default SvgArrowsJoin;
