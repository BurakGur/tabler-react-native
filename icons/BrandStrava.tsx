import * as React from "react";
import type { SVGProps } from "react";
const SvgBrandStrava = ({
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
    className="icon icon-tabler icon-tabler-brand-strava"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M15 13 10 3 5 13m6 0 4 8 4-8" />
  </svg>
);
export default SvgBrandStrava;
