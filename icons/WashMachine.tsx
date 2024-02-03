import * as React from "react";
import type { SVGProps } from "react";
const SvgWashMachine = ({
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
    className="icon icon-tabler icon-tabler-wash-machine"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
    <path d="M8 14a4 4 0 1 0 8 0 4 4 0 1 0-8 0M8 6h.01M11 6h.01M14 6h2" />
    <path d="M8 14q2-1 4 0t4 0" />
  </svg>
);
export default SvgWashMachine;
