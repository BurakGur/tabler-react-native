import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowBearLeft = ({
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
    className="icon icon-tabler icon-tabler-arrow-bear-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M13 3H8v5" />
    <path d="m8 3 7.536 7.536A5 5 0 0 1 17 14.07V21" />
  </svg>
);
export default SvgArrowBearLeft;
