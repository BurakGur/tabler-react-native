import * as React from "react";
import type { SVGProps } from "react";
const SvgCup = ({
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
    className="icon icon-tabler icon-tabler-cup"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 11h14V8H5zM17.5 11 16 21H8L6.5 11M6 8V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v1M15 5V3" />
  </svg>
);
export default SvgCup;
