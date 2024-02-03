import * as React from "react";
import type { SVGProps } from "react";
const SvgStarHalf = ({
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
    className="icon icon-tabler icon-tabler-star-half"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m12 17.75-6.172 3.245 1.179-6.873-5-4.867 6.9-1 3.086-6.253z" />
  </svg>
);
export default SvgStarHalf;
