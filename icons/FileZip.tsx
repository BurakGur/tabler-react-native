import * as React from "react";
import type { SVGProps } from "react";
const SvgFileZip = ({
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
    className="icon icon-tabler icon-tabler-file-zip"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" />
    <path d="M6 20.735A2 2 0 0 1 5 19V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2h-1" />
    <path d="M11 17a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2M11 5h-1M13 7h-1M11 9h-1M13 11h-1M11 13h-1M13 15h-1" />
  </svg>
);
export default SvgFileZip;
