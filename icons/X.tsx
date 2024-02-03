import * as React from "react";
import type { SVGProps } from "react";
const SvgX = ({
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
    className="icon icon-tabler icon-tabler-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
);
export default SvgX;
