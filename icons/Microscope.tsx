import * as React from "react";
import type { SVGProps } from "react";
const SvgMicroscope = ({
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
    className="icon icon-tabler icon-tabler-microscope"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 21h14M6 18h2M7 18v3M9 11l3 3 6-6-3-3zM10.5 12.5 9 14M17 3l3 3M12 21a6 6 0 0 0 3.715-10.712" />
  </svg>
);
export default SvgMicroscope;
