import * as React from "react";
import type { SVGProps } from "react";
const SvgWoman = ({
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
    className="icon icon-tabler icon-tabler-woman"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 16v5M14 16v5M8 16h8l-2-7h-4zM5 11q2.5-2 5-2M19 11q-2.5-2-5-2M10 4a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
  </svg>
);
export default SvgWoman;
