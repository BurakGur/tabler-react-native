import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBearRight2 = ({
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
    className="icon icon-tabler icon-tabler-arrow-bear-right-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 3h5v5" />
    <path d="m20 3-7.536 7.536A5 5 0 0 0 11 14.07V21M4 5l4.5 4.5" />
  </svg>
);
export default SvgArrowBearRight2;
