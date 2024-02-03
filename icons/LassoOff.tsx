import * as React from "react";
import type { SVGProps } from "react";
const SvgLassoOff = ({
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
    className="icon icon-tabler icon-tabler-lasso-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4.028 13.252C3.371 12.28 3 11.174 3 10c0-1.804.878-3.449 2.319-4.69m2.49-1.506A11.1 11.1 0 0 1 12 3c4.97 0 9 3.134 9 7 0 1.799-.873 3.44-2.307 4.68m-2.503 1.517A11.1 11.1 0 0 1 12 17c-1.913 0-3.686-.464-5.144-1.255" />
    <path d="M3 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
    <path d="M5 17c0 1.42.316 2.805 1 4M3 3l18 18" />
  </svg>
);
export default SvgLassoOff;
