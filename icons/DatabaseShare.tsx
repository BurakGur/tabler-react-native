import * as React from "react";
import type { SVGProps } from "react";
const SvgDatabaseShare = ({
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
    className="icon icon-tabler icon-tabler-database-share"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
    <path d="M4 6v6c0 1.657 3.582 3 8 3q.541 0 1.065-.026M20 13V6" />
    <path d="M4 12v6c0 1.657 3.582 3 8 3M16 22l5-5M21 21.5V17h-4.5" />
  </svg>
);
export default SvgDatabaseShare;
