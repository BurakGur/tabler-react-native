import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBadgeUpFilled = ({
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
    className="icon icon-tabler icon-tabler-arrow-badge-up-filled"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      stroke="none"
      d="m11.375 6.22-5 4A1 1 0 0 0 6 11v6l.006.112a1 1 0 0 0 1.619.669L12 14.28l4.375 3.5A1 1 0 0 0 18 17v-6a1 1 0 0 0-.375-.78l-5-4a1 1 0 0 0-1.25 0"
    />
  </svg>
);
export default SvgArrowBadgeUpFilled;
