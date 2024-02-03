import * as React from "react";
import type { SVGProps } from "react";
const SvgSandbox = ({
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
    className="icon icon-tabler icon-tabler-sandbox"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19.953 8.017 21 15v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2l1.245-8.297A2 2 0 0 1 6.222 5H10M3 15h18M13 3l5.5 1.5M15.75 3.75l-2 7" />
    <path d="M7 10.5q2.5-1 5 0t5 0" />
  </svg>
);
export default SvgSandbox;
