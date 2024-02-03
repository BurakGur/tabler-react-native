import * as React from "react";
import type { SVGProps } from "react";
const SvgCone = ({
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
    className="icon icon-tabler icon-tabler-cone"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 17.998v-.5l-8.13-14.99a1 1 0 0 0-1.74 0L3 17.497v.5C3 19.656 7.03 21 12 21s9-1.344 9-3.002" />
  </svg>
);
export default SvgCone;
