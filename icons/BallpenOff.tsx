import * as React from "react";
import type { SVGProps } from "react";
const SvgBallpenOff = ({
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
    className="icon icon-tabler icon-tabler-ballpen-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m14 6 7 7-2 2M10 10l-4.172 4.172a2.828 2.828 0 1 0 4 4L14 14" />
    <path d="m16 12 4.414-4.414a2 2 0 0 0 0-2.829l-1.171-1.171a2 2 0 0 0-2.829 0L12 8M4 20l1.768-1.768M3 3l18 18" />
  </svg>
);
export default SvgBallpenOff;
