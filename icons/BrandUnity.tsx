import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandUnity = ({
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
    className="icon icon-tabler icon-tabler-brand-unity"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m14 3 6 4v7M18 17l-6 4-6-4M4 14V7l6-4" />
    <path d="m4 7 8 5v9M20 7l-8 5" />
  </svg>
);
export default SvgBrandUnity;
