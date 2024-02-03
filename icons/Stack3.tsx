import * as React from "react";
import type { SVGProps } from "react";
const SvgStack3 = ({
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
    className="icon icon-tabler icon-tabler-stack-3"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 2 4 6l8 4 8-4zM4 10l8 4 8-4M4 18l8 4 8-4M4 14l8 4 8-4" />
  </svg>
);
export default SvgStack3;
