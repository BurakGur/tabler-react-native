import * as React from "react";
import type { SVGProps } from "react";
const SvgRewindBackward60 = ({
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
    className="icon icon-tabler icon-tabler-rewind-backward-60"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19.007 16.466A6 6 0 0 0 15 6H4" />
    <path d="M7 9 4 6l3-3M12 15.5v3a1.5 1.5 0 0 0 3 0v-3a1.5 1.5 0 0 0-3 0M9 14H7a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H6" />
  </svg>
);
export default SvgRewindBackward60;
