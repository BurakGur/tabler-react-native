import * as React from "react";
import type { SVGProps } from "react";
const SvgSignalLte = ({
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
    className="icon icon-tabler icon-tabler-signal-lte"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M21 8h-4v8h4M17 12h2.5M4 8v8h4M10 8h4M12 8v8" />
  </svg>
);
export default SvgSignalLte;
