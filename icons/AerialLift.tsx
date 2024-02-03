import * as React from "react";
import type { SVGProps } from "react";
const SvgAerialLift = ({
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
    className="icon icon-tabler icon-tabler-aerial-lift"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m4 5 16-2m-8 1v10M6.894 8H17.2c2.45 3 2.45 9-.2 12H6.894c-2.544-3-2.544-9 0-12M5 14h14" />
  </svg>
);
export default SvgAerialLift;
