import * as React from "react";
import type { SVGProps } from "react";
const SvgAdjustmentsAlt = ({
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
    className="icon icon-tabler icon-tabler-adjustments-alt"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 8h4v4H4zM6 4v4M6 12v8M10 14h4v4h-4zM12 4v10M12 18v2M16 5h4v4h-4zM18 4v1M18 9v11" />
  </svg>
);
export default SvgAdjustmentsAlt;
