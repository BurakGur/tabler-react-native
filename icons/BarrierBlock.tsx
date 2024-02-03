import * as React from "react";
import type { SVGProps } from "react";
const SvgBarrierBlock = ({
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
    className="icon icon-tabler icon-tabler-barrier-block"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 8a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zM7 16v4M7.5 16l9-9M13.5 16 20 9.5M4 13.5 10.5 7M17 16v4M5 20h4M15 20h4M17 7V5M7 7V5" />
  </svg>
);
export default SvgBarrierBlock;
