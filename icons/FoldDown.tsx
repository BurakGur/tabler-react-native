import * as React from "react";
import type { SVGProps } from "react";
const SvgFoldDown = ({
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
    className="icon icon-tabler icon-tabler-fold-down"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M12 11v8l3-3m-6 0 3 3M9 7h1M14 7h1M19 7h1M4 7h1" />
  </svg>
);
export default SvgFoldDown;
