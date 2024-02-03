import * as React from "react";
import type { SVGProps } from "react";
const SvgAdCircle = ({
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
    className="icon icon-tabler icon-tabler-ad-circle"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M2 12a10 10 0 1 0 20 0 10 10 0 1 0-20 0" />
    <path d="M7 15v-4.5a1.5 1.5 0 0 1 3 0V15M7 13h3M14 9v6h1a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2z" />
  </svg>
);
export default SvgAdCircle;
