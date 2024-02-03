import * as React from "react";
import type { SVGProps } from "react";
const SvgPlayBasketball = ({
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
    className="icon icon-tabler icon-tabler-play-basketball"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 4a1 1 0 1 0 2 0 1 1 0 0 0-2 0M5 21l3-3 .75-1.5M14 21v-4l-4-3 .5-6" />
    <path d="m5 12 1-3 4.5-1 3.5 3 4 1" />
    <path fill="currentColor" d="M18.5 16a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" />
  </svg>
);
export default SvgPlayBasketball;
