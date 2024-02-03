import * as React from "react";
import type { SVGProps } from "react";
const SvgAdjustmentsCheck = ({
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
    className="icon icon-tabler icon-tabler-adjustments-check"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 10a2 2 0 1 0 4 0 2 2 0 0 0-4 0M6 4v4M6 12v8M13.823 15.176a2 2 0 1 0-2.638 2.651M12 4v10M16 7a2 2 0 1 0 4 0 2 2 0 0 0-4 0M18 4v1M18 9v5M15 19l2 2 4-4" />
  </svg>
);
export default SvgAdjustmentsCheck;
