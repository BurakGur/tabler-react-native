import * as React from "react";
import type { SVGProps } from "react";
const SvgAdjustmentsCancel = ({
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
    className="icon icon-tabler icon-tabler-adjustments-cancel"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 4v4M6 12v8M13.499 14.675A2 2 0 1 0 12 18M12 4v10M12 18v2M16 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0M18 4v1M18 9v3M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0M17 21l4-4" />
  </svg>
);
export default SvgAdjustmentsCancel;
