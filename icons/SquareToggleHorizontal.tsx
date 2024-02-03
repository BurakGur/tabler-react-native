import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareToggleHorizontal = ({
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
    className="icon icon-tabler icon-tabler-square-toggle-horizontal"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M22 12H2M4 14V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8M18 20a2 2 0 0 0 2-2M4 18a2 2 0 0 0 2 2M14 20h-4" />
  </svg>
);
export default SvgSquareToggleHorizontal;
