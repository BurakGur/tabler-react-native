import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeCheck = ({
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
    className="icon icon-tabler icon-tabler-home-check"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2" />
    <path d="M19 13.488V12h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h4.525M15 19l2 2 4-4" />
  </svg>
);
export default SvgHomeCheck;
