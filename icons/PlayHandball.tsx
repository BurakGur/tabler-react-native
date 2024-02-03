import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayHandball = ({
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
    className="icon icon-tabler icon-tabler-play-handball"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m13 21 3.5-2-4.5-4 2-4.5" />
    <path d="m7 6 2 4 5 .5 4 2.5 2.5 3M4 20l5-1 1.5-2M15 7a1 1 0 1 0 2 0 1 1 0 0 0-2 0" />
    <path fill="currentColor" d="M9.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
  </svg>
);
export default SvgPlayHandball;
