import * as React from "react";
import type { SVGProps } from "react";
const SvgAntennaOff = ({
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
    className="icon icon-tabler icon-tabler-antenna-off"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M20 4v8M16 4.5v7M12 5v3m0 4v9M8 8v2.5M4 6v4M20 8h-8M8 8H4M3 3l18 18" />
  </svg>
);
export default SvgAntennaOff;
