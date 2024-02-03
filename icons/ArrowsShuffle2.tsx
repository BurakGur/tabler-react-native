import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsShuffle2 = ({
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
    className="icon icon-tabler icon-tabler-arrows-shuffle-2"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m18 4 3 3-3 3M18 20l3-3-3-3" />
    <path d="M3 7h3a5 5 0 0 1 5 5 5 5 0 0 0 5 5h5" />
    <path d="M3 17h3a5 5 0 0 0 5-5 5 5 0 0 1 5-5h5" />
  </svg>
);
export default SvgArrowsShuffle2;
