import * as React from "react";
import type { SVGProps } from "react";
const SvgDatabase = ({
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
    className="icon icon-tabler icon-tabler-database"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M4 6a8 3 0 1 0 16 0A8 3 0 1 0 4 6" />
    <path d="M4 6v6a8 3 0 0 0 16 0V6" />
    <path d="M4 12v6a8 3 0 0 0 16 0v-6" />
  </svg>
);
export default SvgDatabase;
