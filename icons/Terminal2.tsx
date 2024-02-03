import * as React from "react";
import type { SVGProps } from "react";
const SvgTerminal2 = ({
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
    className="icon icon-tabler icon-tabler-terminal-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m8 9 3 3-3 3M13 15h3" />
    <path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);
export default SvgTerminal2;
