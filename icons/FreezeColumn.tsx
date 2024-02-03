import * as React from "react";
import type { SVGProps } from "react";
const SvgFreezeColumn = ({
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
    className="icon icon-tabler icon-tabler-freeze-column"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="m9 9.5-6 6M9 4l-6 6M9 15l-5 5M9 3v18M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
  </svg>
);
export default SvgFreezeColumn;
