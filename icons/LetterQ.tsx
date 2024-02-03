import * as React from "react";
import type { SVGProps } from "react";
const SvgLetterQ = ({
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
    className="icon icon-tabler icon-tabler-letter-q"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 9a5 5 0 0 0-5-5h-2a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h2a5 5 0 0 0 5-5zM13 15l5 5" />
  </svg>
);
export default SvgLetterQ;
