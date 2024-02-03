import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartCheck = ({
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
    className="icon icon-tabler icon-tabler-heart-check"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m19.5 12.572-3 2.928M11 19a8917 8917 0 0 0-6.5-6.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572M15 19l2 2 4-4" />
  </svg>
);
export default SvgHeartCheck;
