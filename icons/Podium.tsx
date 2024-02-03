import * as React from "react";
import type { SVGProps } from "react";
const SvgPodium = ({
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
    className="icon icon-tabler icon-tabler-podium"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 8h14l-.621 2.485A2 2 0 0 1 16.439 12H7.561a2 2 0 0 1-1.94-1.515zM7 8V6a3 3 0 0 1 3-3M8 12l1 9M16 12l-1 9M7 21h10" />
  </svg>
);
export default SvgPodium;
