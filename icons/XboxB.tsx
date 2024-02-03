import * as React from "react";
import type { SVGProps } from "react";
const SvgXboxB = ({
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
    className="icon icon-tabler icon-tabler-xbox-b"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 21a9 9 0 0 0 9-9 9 9 0 0 0-9-9 9 9 0 0 0-9 9 9 9 0 0 0 9 9" />
    <path d="M13 12a2 2 0 1 1 0 4h-3v-4M13 12h-3M13 12a2 2 0 1 0 0-4h-3v4" />
  </svg>
);
export default SvgXboxB;
