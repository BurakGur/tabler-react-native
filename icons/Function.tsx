import * as React from "react";
import type { SVGProps } from "react";
const SvgFunction = ({
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
    className="icon icon-tabler icon-tabler-function"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 6.667A2.667 2.667 0 0 1 6.667 4h10.666A2.667 2.667 0 0 1 20 6.667v10.666A2.667 2.667 0 0 1 17.333 20H6.667A2.667 2.667 0 0 1 4 17.333z" />
    <path d="M9 15.5v.25c0 .69.56 1.25 1.25 1.25a1.38 1.38 0 0 0 1.374-1.244l.752-7.512A1.38 1.38 0 0 1 13.75 7c.69 0 1.25.56 1.25 1.25v.25M9 12h6" />
  </svg>
);
export default SvgFunction;
