import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowsDoubleNwSe = ({
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
    className="icon icon-tabler icon-tabler-arrows-double-nw-se"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M14 21 3 10M3 14v-4h4M17 14h4v-4M10 3l11 11" />
  </svg>
);
export default SvgArrowsDoubleNwSe;
