import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBearLeft2 = ({
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
    className="icon icon-tabler icon-tabler-arrow-bear-left-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 3H4v5" />
    <path d="m4 3 7.536 7.536A5 5 0 0 1 13 14.07V21M20 5l-4.5 4.5" />
  </svg>
);
export default SvgArrowBearLeft2;
