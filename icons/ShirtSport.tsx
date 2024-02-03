import * as React from "react";
import type { SVGProps } from "react";
const SvgShirtSport = ({
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
    className="icon icon-tabler icon-tabler-shirt-sport"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m15 4 6 2v5h-3v8a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-8H3V6l6-2a3 3 0 0 0 6 0" />
    <path d="M10.5 11H13l-1.5 5" />
  </svg>
);
export default SvgShirtSport;
