import * as React from "react";
import type { SVGProps } from "react";
const SvgLifebuoy = ({
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
    className="icon icon-tabler icon-tabler-lifebuoy"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" />
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 1 0-18 0M15 15l3.35 3.35M9 15l-3.35 3.35M5.65 5.65 9 9M18.35 5.65 15 9" />
  </svg>
);
export default SvgLifebuoy;
