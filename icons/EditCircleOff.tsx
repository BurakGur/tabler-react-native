import * as React from "react";
import type { SVGProps } from "react";
const SvgEditCircleOff = ({
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
    className="icon icon-tabler icon-tabler-edit-circle-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10.507 10.498 9 12v3h3l1.493-1.498m2-2.01 4.89-4.907a2.1 2.1 0 0 0-2.97-2.97L12.5 8.511M16 5l3 3" />
    <path d="M7.476 7.471A7 7 0 0 0 10 21a7 7 0 0 0 6.53-4.474M3 3l18 18" />
  </svg>
);
export default SvgEditCircleOff;
