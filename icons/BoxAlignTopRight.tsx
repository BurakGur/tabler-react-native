import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxAlignTopRight = ({
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
    className="icon icon-tabler icon-tabler-box-align-top-right"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M19 11.01h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1M20 15.01V15M20 20.01V20M15 20.01V20M9 20.01V20M9 4.01V4M4 20.01V20M4 15.01V15M4 9.01V9M4 4.01V4" />
  </svg>
);
export default SvgBoxAlignTopRight;
