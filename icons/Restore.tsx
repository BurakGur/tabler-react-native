import * as React from "react";
import type { SVGProps } from "react";
const SvgRestore = ({
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
    className="icon icon-tabler icon-tabler-restore"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M3.06 13a9 9 0 1 0 .49-4.087" />
    <path d="M3 4.001v5h5M11 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0" />
  </svg>
);
export default SvgRestore;
