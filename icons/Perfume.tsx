import * as React from "react";
import type { SVGProps } from "react";
const SvgPerfume = ({
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
    className="icon icon-tabler icon-tabler-perfume"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 6v3M14 6v3M5 11a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z" />
    <path d="M10 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M9 3h6v3H9z" />
  </svg>
);
export default SvgPerfume;
