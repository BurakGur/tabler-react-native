import * as React from "react";
import type { SVGProps } from "react";
const SvgEggs = ({
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
    className="icon icon-tabler icon-tabler-eggs"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 22c-3 0-4.868-2.118-5-5 0-3 2-5 5-5 4 0 8.01 2.5 8 5 0 2.5-4 5-8 5" />
    <path d="M8 18c-3.03-.196-5-2.309-5-5.38C3 8.313 5.75 3.995 8.5 4c2.614 0 5.248 3.915 5.5 8" />
  </svg>
);
export default SvgEggs;
