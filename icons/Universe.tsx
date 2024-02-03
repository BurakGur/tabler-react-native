import * as React from "react";
import type { SVGProps } from "react";
const SvgUniverse = ({
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
    className="icon icon-tabler icon-tabler-universe"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M7.027 11.477a5 5 0 1 0 5.496-4.45 4.95 4.95 0 0 0-3.088.681" />
    <path d="M5.636 5.636a9 9 0 1 0 3.555-2.188" />
    <path d="M17 5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0M8 16a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </svg>
);
export default SvgUniverse;
