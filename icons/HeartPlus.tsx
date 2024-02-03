import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartPlus = ({
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
    className="icon icon-tabler icon-tabler-heart-plus"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 20-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.96 6.053M16 19h6M19 16v6" />
  </svg>
);
export default SvgHeartPlus;
