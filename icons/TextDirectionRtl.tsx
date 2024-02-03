import * as React from "react";
import type { SVGProps } from "react";
const SvgTextDirectionRtl = ({
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
    className="icon icon-tabler icon-tabler-text-direction-rtl"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 4H9.5a3.5 3.5 0 0 0 0 7h.5M14 15V4M10 15V4M5 19h14M7 21l-2-2 2-2" />
  </svg>
);
export default SvgTextDirectionRtl;
