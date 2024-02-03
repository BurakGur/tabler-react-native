import * as React from "react";
import type { SVGProps } from "react";
const SvgFileScissors = ({
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
    className="icon icon-tabler icon-tabler-file-scissors"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2" />
    <path d="M14 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 17a1 1 0 1 0 2 0 1 1 0 1 0-2 0M9 17l6-6M15 17l-6-6" />
  </svg>
);
export default SvgFileScissors;
