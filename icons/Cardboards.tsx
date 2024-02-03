import * as React from "react";
import type { SVGProps } from "react";
const SvgCardboards = ({
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
    className="icon icon-tabler icon-tabler-cardboards"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 8v8.5A2.5 2.5 0 0 0 5.5 19h1.06a3 3 0 0 0 2.34-1.13l1.54-1.92a2 2 0 0 1 3.12 0l1.54 1.92A3 3 0 0 0 17.44 19h1.06a2.5 2.5 0 0 0 2.5-2.5V8a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2" />
    <path d="M7 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M15 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </svg>
);
export default SvgCardboards;
