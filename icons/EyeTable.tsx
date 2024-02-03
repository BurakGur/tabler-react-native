import * as React from "react";
import type { SVGProps } from "react";
const SvgEyeTable = ({
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
    className="icon icon-tabler icon-tabler-eye-table"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 18h-.011M12 18h-.011M16 18h-.011M4 3h16M5 3v17a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3M14 7h-4M9 15h1M14 15h1M12 11V7" />
  </svg>
);
export default SvgEyeTable;
