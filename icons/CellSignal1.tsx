import * as React from "react";
import type { SVGProps } from "react";
const SvgCellSignal1 = ({
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
    className="icon icon-tabler icon-tabler-cell-signal-1"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 20H4.731a.731.731 0 0 1-.517-1.249L18.751 4.214A.731.731 0 0 1 20 4.731z" />
  </svg>
);
export default SvgCellSignal1;
