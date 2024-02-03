import * as React from "react";
import type { SVGProps } from "react";
const SvgButterfly = ({
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
    className="icon icon-tabler icon-tabler-butterfly"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 18.176a3 3 0 1 1-4.953-2.449l-.025.023A4.502 4.502 0 0 1 8.505 7c1.414 0 2.675.652 3.5 1.671a4.5 4.5 0 1 1 4.983 7.079A3 3 0 1 1 12.005 18zM12 19V9M9 3l3 2 3-2" />
  </svg>
);
export default SvgButterfly;
