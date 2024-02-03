import * as React from "react";
import type { SVGProps } from "react";
const SvgFileVector = ({
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
    className="icon icon-tabler icon-tabler-file-vector"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4M8 16.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0M13 12.5a1.5 1.5 0 1 0 3 0 1.5 1.5 0 1 0-3 0" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2" />
    <path d="M9.5 15a2.5 2.5 0 0 1 2.5-2.5h1" />
  </svg>
);
export default SvgFileVector;
