import * as React from "react";
import type { SVGProps } from "react";
const SvgFileDatabase = ({
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
    className="icon icon-tabler icon-tabler-file-database"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M8 12.75a4 1.75 0 1 0 8 0 4 1.75 0 1 0-8 0" />
    <path d="M8 12.5v3.75C8 17.216 9.79 18 12 18s4-.784 4-1.75V12.5M14 3v4a1 1 0 0 0 1 1h4" />
    <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2" />
  </svg>
);
export default SvgFileDatabase;
