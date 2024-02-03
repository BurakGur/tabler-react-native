import * as React from "react";
import type { SVGProps } from "react";
const SvgBmp = ({
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
    className="icon icon-tabler icon-tabler-bmp"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 16V8h2a2 2 0 1 1 0 4h-2M6 14a2 2 0 0 1-2 2H2V8h2a2 2 0 1 1 0 4H2h2a2 2 0 0 1 2 2M9 16V8l3 6 3-6v8" />
  </svg>
);
export default SvgBmp;
