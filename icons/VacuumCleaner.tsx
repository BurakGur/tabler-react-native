import * as React from "react";
import type { SVGProps } from "react";
const SvgVacuumCleaner = ({
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
    className="icon icon-tabler icon-tabler-vacuum-cleaner"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" />
    <path d="M14 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0M12 16h.01" />
  </svg>
);
export default SvgVacuumCleaner;
