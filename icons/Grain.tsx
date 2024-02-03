import * as React from "react";
import type { SVGProps } from "react";
const SvgGrain = ({
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
    className="icon icon-tabler icon-tabler-grain"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3.5 9.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8.5 4.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8.5 14.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3.5 19.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M13.5 9.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M18.5 4.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M13.5 19.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M18.5 14.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </svg>
);
export default SvgGrain;
