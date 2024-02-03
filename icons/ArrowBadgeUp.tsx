import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBadgeUp = ({
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
    className="icon icon-tabler icon-tabler-arrow-badge-up"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M17 11v6l-5-4-5 4v-6l5-4z" />
  </svg>
);
export default SvgArrowBadgeUp;
