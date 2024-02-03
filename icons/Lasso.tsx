import * as React from "react";
import type { SVGProps } from "react";
const SvgLasso = ({
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
    className="icon icon-tabler icon-tabler-lasso"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4.028 13.252C3.371 12.28 3 11.174 3 10c0-3.866 4.03-7 9-7s9 3.134 9 7-4.03 7-9 7c-1.913 0-3.686-.464-5.144-1.255" />
    <path d="M3 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M5 17c0 1.42.316 2.805 1 4" />
  </svg>
);
export default SvgLasso;
