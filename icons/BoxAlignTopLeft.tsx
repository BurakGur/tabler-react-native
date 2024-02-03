import * as React from "react";
import type { SVGProps } from "react";
const SvgBoxAlignTopLeft = ({
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
    className="icon icon-tabler icon-tabler-box-align-top-left"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M11 5v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1M15 4h-.01M20 4h-.01M20 9h-.01M20 15h-.01M4 15h-.01M20 20h-.01M15 20h-.01M9 20h-.01M4 20h-.01" />
  </svg>
);
export default SvgBoxAlignTopLeft;
