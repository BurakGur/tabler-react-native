import * as React from "react";
import type { SVGProps } from "react";
const SvgEggCracked = ({
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
    className="icon icon-tabler icon-tabler-egg-cracked"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 14.083c0 4.154-2.966 6.74-7 6.917-4.2 0-7-2.763-7-6.917C5 8.545 8.5 2.993 12 3s7 5.545 7 11.083" />
    <path d="m12 3-1.5 5 3.5 2.5-2 3.5" />
  </svg>
);
export default SvgEggCracked;
