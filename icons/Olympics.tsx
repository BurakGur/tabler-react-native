import * as React from "react";
import type { SVGProps } from "react";
const SvgOlympics = ({
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
    className="icon icon-tabler icon-tabler-olympics"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0M15 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0M9 9a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
    <path d="M6 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0M12 15a3 3 0 1 0 6 0 3 3 0 1 0-6 0" />
  </svg>
);
export default SvgOlympics;
