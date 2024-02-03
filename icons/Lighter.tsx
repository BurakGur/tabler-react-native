import * as React from "react";
import type { SVGProps } from "react";
const SvgLighter = ({
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
    className="icon icon-tabler icon-tabler-lighter"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 3v16a2 2 0 0 0 2 2h5a2 2 0 0 0 2-2v-7H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z" />
    <path d="m16 4 1.465 1.638a2 2 0 1 1-3.015.099z" />
  </svg>
);
export default SvgLighter;
