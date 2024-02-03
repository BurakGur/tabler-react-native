import * as React from "react";
import type { SVGProps } from "react";
const SvgHomeOff = ({
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
    className="icon icon-tabler icon-tabler-home-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M5 12H3l4.497-4.497m2-2 2.504-2.504 9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2m0-4v-3" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2m2 2v6M3 3l18 18" />
  </svg>
);
export default SvgHomeOff;
