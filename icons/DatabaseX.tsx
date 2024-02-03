import * as React from "react";
import type { SVGProps } from "react";
const SvgDatabaseX = ({
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
    className="icon icon-tabler icon-tabler-database-x"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 6c0 1.657 3.582 3 8 3s8-1.343 8-3-3.582-3-8-3-8 1.343-8 3" />
    <path d="M4 6v6c0 1.657 3.582 3 8 3q.807 0 1.57-.058M20 13.5V6" />
    <path d="M4 12v6c0 1.657 3.582 3 8 3q.577 0 1.132-.03M22 22l-5-5M17 22l5-5" />
  </svg>
);
export default SvgDatabaseX;
