import * as React from "react";
import type { SVGProps } from "react";
const SvgNumber16Small = ({
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
    className="icon icon-tabler icon-tabler-number-16-small"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m7 10 2-2v8M17 9a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3" />
  </svg>
);
export default SvgNumber16Small;
