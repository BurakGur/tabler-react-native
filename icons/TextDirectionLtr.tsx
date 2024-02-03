import * as React from "react";
import type { SVGProps } from "react";
const SvgTextDirectionLtr = ({
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
    className="icon icon-tabler icon-tabler-text-direction-ltr"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 19h14M17 21l2-2-2-2M16 4H9.5a3.5 3.5 0 0 0 0 7h.5M14 15V4M10 15V4" />
  </svg>
);
export default SvgTextDirectionLtr;
