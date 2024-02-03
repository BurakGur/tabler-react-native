import * as React from "react";
import type { SVGProps } from "react";
const SvgDatabaseSmile = ({
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
    className="icon icon-tabler icon-tabler-database-smile"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M10 14h.01M14 14h.01M10 17a3.5 3.5 0 0 0 4 0M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
    <path d="M4 6v12c0 1.657 3.582 3 8 3s8-1.343 8-3V6" />
  </svg>
);
export default SvgDatabaseSmile;
