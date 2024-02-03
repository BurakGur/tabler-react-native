import * as React from "react";
import type { SVGProps } from "react";
const SvgBold = ({
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
    className="icon icon-tabler icon-tabler-bold"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7 5h6a3.5 3.5 0 0 1 0 7H7zM13 12h1a3.5 3.5 0 0 1 0 7H7v-7" />
  </svg>
);
export default SvgBold;
