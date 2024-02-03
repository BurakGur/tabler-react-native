import * as React from "react";
import type { SVGProps } from "react";
const SvgVinyl = ({
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
    className="icon icon-tabler icon-tabler-vinyl"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M16 3.937A9 9 0 1 0 21 12" />
    <path d="M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M19 4a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
    <path d="m20 4-3.5 10-2.5 2" />
  </svg>
);
export default SvgVinyl;
