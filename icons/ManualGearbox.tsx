import * as React from "react";
import type { SVGProps } from "react";
const SvgManualGearbox = ({
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
    className="icon icon-tabler icon-tabler-manual-gearbox"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 6a2 2 0 1 0 4 0 2 2 0 1 0-4 0M3 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M10 18a2 2 0 1 0 4 0 2 2 0 1 0-4 0M5 8v8M12 8v8" />
    <path d="M19 8v2a2 2 0 0 1-2 2H5" />
  </svg>
);
export default SvgManualGearbox;
